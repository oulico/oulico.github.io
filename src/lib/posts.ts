// Define the structure of a post's frontmatter
export interface PostFrontmatter {
  title: string;
  date: string;
  category: string;
  tags: string[];
}

// Define the structure of a full post object - this structure comes from the JSON
export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string; // Content now contains ASCII art
}

// Asynchronously load and process all posts from pre-generated JSON files
export const getPosts = async (): Promise<Post[]> => {
  // Fetch post manifest to get all slugs
  const manifestResponse = await fetch('/static-posts/post-manifest.json');
  if (!manifestResponse.ok) {
    throw new Error('Failed to fetch post manifest');
  }
  const postSlugs: string[] = await manifestResponse.json();

  // Fetch each post's JSON data
  const posts: Post[] = await Promise.all(
    postSlugs.map(async (slug) => {
      const response = await fetch(`/static-posts/${slug}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch post: ${slug}`);
      }
      return response.json();
    })
  );

  // Sort posts by date in descending order (newest first)
  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return posts;
};

// Function to get a single post by slug from pre-generated JSON files
export const getPost = async (slug: string): Promise<Post | undefined> => {
    const response = await fetch(`/static-posts/${slug}.json`);
    if (!response.ok) {
        if (response.status === 404) {
            return undefined; // Post not found
        }
        throw new Error(`Failed to fetch post: ${slug} with status ${response.status}`);
    }
    return response.json();
}

export interface TagData {
  value: string;
  count: number;
}

export const getTagsWithFrequency = async (): Promise<TagData[]> => {
  const posts = await getPosts(); // This will now fetch from JSON
  const tagCounts: { [key: string]: number } = {};

  posts.forEach(post => {
    post.frontmatter.tags.forEach(tag => {
      const lowerCaseTag = tag.toLowerCase(); // Standardize tags
      tagCounts[lowerCaseTag] = (tagCounts[lowerCaseTag] || 0) + 1;
    });
  });

  // Convert to array format for react-tagcloud
  const tagsData: TagData[] = Object.entries(tagCounts).map(([tag, count]) => ({
    value: tag,
    count: count,
  }));

  return tagsData;
};

