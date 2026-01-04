import React, { useState, useEffect } from 'react';
import { TagCloud } from 'react-tagcloud';
import { getTagsWithFrequency, type TagData } from '../lib/posts';
import { useNavigate } from 'react-router-dom';

const TagCloudPage: React.FC = () => {
  const [tags, setTags] = useState<TagData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await getTagsWithFrequency();
        setTags(fetchedTags);
      } catch (error) {
        console.error("Failed to fetch tags:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  const customRenderer = (tag: TagData, size: number) => {
    return (
      <span
        key={tag.value}
        style={{
          fontSize: `${size / 2}em`, // Adjust size scaling
          margin: '0 0.4em 0.4em 0.4em',
          padding: '0.4em 0.6em',
          display: 'inline-block',
          cursor: 'pointer',
          color: 'var(--light-slate)', // Override with our theme color
          backgroundColor: 'rgba(100, 255, 218, 0.1)', // Subtle background from green accent
          borderRadius: '3px',
          transition: 'color 0.3s ease, background-color 0.3s ease, transform 0.1s ease-in-out',
        }}
        className="tag-cloud-tag" // For additional styling in index.css if needed
        onClick={() => navigate(`/tags/${tag.value}`)}
      >
        {tag.value}
      </span>
    );
  };

  if (loading) {
    return <div>Loading tags...</div>;
  }

  return (
    <div>
      <h1>Tag Cloud</h1>
      {tags.length === 0 ? (
        <p>No tags found.</p>
      ) : (
        <TagCloud
          minSize={1.5} // Base size
          maxSize={4.5} // Max size for most frequent
          tags={tags}
          renderer={customRenderer}
          disableRandomColor={true} // We are setting our own colors
        />
      )}
    </div>
  );
};

export default TagCloudPage;
