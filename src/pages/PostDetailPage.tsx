import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, type Post } from '../lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MermaidRenderer from '../components/MermaidRenderer'; // Import MermaidRenderer


import rehypeRaw from 'rehype-raw';
import styles from './PostDetailPage.module.css'; // Import post-specific styles

const PostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const foundPost = await getPost(slug);
        setPost(foundPost);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <article>
      <h1>{post.frontmatter.title}</h1>
      <p>Category: {post.frontmatter.category} | Tags: {post.frontmatter.tags.join(', ')}</p>
      <hr />
      <div className={styles.postContent}>
        <ReactMarkdown
          children={post.content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({className, children}) {
              const match = /language-(\w+)/.exec(className || '')
              const language = match?.[1];

              if (language === 'mermaid') {
                return <MermaidRenderer chart={String(children).replace(/\n$/, '')} />;
              }
              
              return match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={a11yDark as any}
                  language={language}
                  PreTag="div"
                />
              ) : (
                <code className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </article>
  );
};

export default PostDetailPage;
