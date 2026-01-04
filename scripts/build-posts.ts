import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import asciifyImage from 'asciify-image';

interface PostFrontmatter {
  title: string;
  date: string;
  category: string;
  tags: string[];
}

interface ProcessedPost {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string; // Content with ASCII art images
}

// Helper to resolve image paths relative to the project root or markdown file
const resolveImagePath = (markdownFilePath: string, imageUrl: string): string => {
  // markdownFilePath is an absolute path to the markdown file
  
  if (imageUrl.startsWith('/')) {
    // If image URL is absolute from project root (e.g., /public/image.jpg)
    return path.join(process.cwd(), imageUrl);
  } else {
    // If image URL is relative to the markdown file (e.g., ./image.jpg)
    const markdownFileDir = path.dirname(markdownFilePath);
    return path.resolve(markdownFileDir, imageUrl);
  }
};

const buildPosts = async () => {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const outputDir = path.join(process.cwd(), 'public', 'static-posts');

  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  const markdownFiles = await fs.readdir(postsDir);

  const processedPosts: ProcessedPost[] = [];
  const postSlugs: string[] = [];

  for (const file of markdownFiles) {
    if (file.endsWith('.md')) {
      const mdFilePath = path.join(postsDir, file);
      const rawMarkdownContent = await fs.readFile(mdFilePath, 'utf-8');
      const { data, content } = matter(rawMarkdownContent);
      
      const slug = file.replace('.md', '');
      postSlugs.push(slug); // Collect slugs

      let processedContent = content;
      const imageRegex = /!\[(.*?)\]\((.*?)\)/g; // Regex for ![alt text](image/path.png)
      let match;

      const replacements: Promise<{ original: string; ascii: string }>[] = [];

      // Reset regex lastIndex before starting the loop
      imageRegex.lastIndex = 0;

      while ((match = imageRegex.exec(content)) !== null) {
        const fullMatch = match[0];
        const altText = match[1];
        const imageUrl = match[2];

        const imageAbsPath = resolveImagePath(mdFilePath, imageUrl);

        replacements.push((async () => {
          try {
            await fs.access(imageAbsPath, fs.constants.F_OK); // Check if file exists
            
            const asciiArt = await asciifyImage(imageAbsPath, {
                fit: 'width',
                width: 80,
            });
            return { original: fullMatch, ascii: `<pre title="${altText || 'ASCII Image'}">${asciiArt}</pre>` };
          } catch (error) {
            console.warn(`[ASCII Image Conversion] Image not found or error processing: ${imageAbsPath}. Keeping original markdown for image.`);
            return { original: fullMatch, ascii: fullMatch };
          }
        })());
      }
      
      const resolvedReplacements = await Promise.all(replacements);

      resolvedReplacements.forEach(rep => {
        processedContent = processedContent.replace(rep.original, rep.ascii);
      });

      processedPosts.push({
        slug,
        frontmatter: data as PostFrontmatter,
        content: processedContent,
      });

      // Save each processed post as a JSON file
      const postJsonPath = path.join(outputDir, `${slug}.json`);
      await fs.writeFile(postJsonPath, JSON.stringify({
        slug,
        frontmatter: data,
        content: processedContent,
      }, null, 2), 'utf-8');
    }
  }
  
  // Save post manifest
  const manifestPath = path.join(outputDir, 'post-manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(postSlugs, null, 2), 'utf-8');

  console.log(`Processed ${processedPosts.length} posts and saved to ${outputDir}`);
};

buildPosts().catch(console.error);
