import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidRendererProps {
  chart: string; // The Mermaid code as a string
}

// Initialize Mermaid once
mermaid.initialize({
  startOnLoad: false, // We will manually start rendering
  theme: 'dark', // Align with our dark theme
  securityLevel: 'loose', // Allow external resources if needed, or set to 'strict'
  fontFamily: 'D2Coding, monospace', // Ensure Mermaid uses the custom font
});

// Helper to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  if (typeof window === 'undefined') {
    // Basic decoding for server-side or non-browser environments
    return text.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
  }
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};


const MermaidRenderer: React.FC<MermaidRendererProps> = ({ chart }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const renderMermaid = async () => {
      try {
        // Decode the chart string to handle any HTML entities
        const decodedChart = decodeHtmlEntities(chart);
        
        // Generate a unique ID for rendering
        const chartId = 'mermaid-chart-' + Math.random().toString(36).substring(7);

        const { svg: renderedSvg } = await mermaid.render(chartId, decodedChart);
        setSvg(renderedSvg);
        setError(null);
      } catch (e) {
        console.error("Mermaid rendering failed:", e);
        setError("Failed to render diagram. Please check the syntax.");
        // Keep the raw code for debugging
        setSvg(`<pre>${chart}</pre>`);
      }
    };

    renderMermaid();
  }, [chart]);

  return (
    <div 
      className="mermaid-chart-container" 
      ref={chartRef} 
      style={{textAlign: 'center', margin: '20px 0'}}
      dangerouslySetInnerHTML={{ __html: svg ?? 'Loading diagram...' }}
    >
      {/* Mermaid.js will inject the SVG here */}
    </div>
  );
};

export default MermaidRenderer;

