import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPosts, type Post } from '../lib/posts';

const TagDetailPage: React.FC = () => {
  const { tagValue } = useParams<{ tagValue: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getPosts();
        const filteredPosts = allPosts.filter(post =>
          post.frontmatter.tags.some(tag => tag.toLowerCase() === tagValue?.toLowerCase())
        );
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Failed to fetch posts for tag:", error);
      } finally {
        setLoading(false);
      }
    };

    if (tagValue) {
      fetchPosts();
    } else {
      setLoading(false); // No tagValue means no filtering
    }
  }, [tagValue]);

  if (loading) {
    return <div>Loading posts for tag "{tagValue}"...</div>;
  }

  return (
    <div>
      <h1>Posts tagged with "{tagValue}"</h1>
      {posts.length === 0 ? (
        <p>No posts found for tag "{tagValue}".</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagDetailPage;
