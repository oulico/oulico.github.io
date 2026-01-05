import React, { useEffect, useRef, useState } from 'react';
// import mermaid from 'mermaid'; // Top-level import removed for dynamic loading

interface MermaidRendererProps {
  chart: string; // The Mermaid code as a string
}

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
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mermaidAPI, setMermaidAPI] = useState<any>(null); // State to hold the mermaid API

  useEffect(() => {
    // Dynamically import mermaid and initialize it
    let isMounted = true;
    import('mermaid')
      .then((mod) => {
        if (isMounted) {
          setMermaidAPI(mod.default);
          mod.default.initialize({
            startOnLoad: false,
            theme: 'base', // Use the base theme to apply custom variables
            themeVariables: {
              // --- Base Colors ---
              background: '#0a192f', // var(--dark-navy)
              primaryColor: '#112240', // A slightly lighter navy for nodes
              
              // --- Text Colors ---
              primaryTextColor: '#ccd6f6', // var(--light-slate) for titles and labels
              secondaryTextColor: '#a8b2d1', // var(--slate) for general text
              tertiaryTextColor: '#a8b2d1',

              // --- Border and Line Colors ---
              primaryBorderColor: '#64ffda', // var(--green) for node borders
              lineColor: '#a8b2d1', // var(--slate) for connectors and arrows
              
              // --- Other Colors ---
              secondaryColor: '#112240',
              tertiaryColor: '#0a192f',
              noteBkgColor: '#112240',
              noteTextColor: '#ccd6f6',
              textColor: '#ccd6f6',
              mainBkg: '#112240',
              errorBkgColor: '#5c2b2b',
              errorTextColor: '#f8d7da',
            },
            securityLevel: 'loose', // Allow external resources if needed, or set to 'strict'
            fontFamily: 'D2Coding, monospace', // Ensure Mermaid uses the custom font
          });
        }
      })
      .catch((e) => {
        if (isMounted) {
          console.error("Failed to load mermaid:", e);
          setError("Failed to load diagram library.");
        }
      });
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const renderMermaid = async () => {
      if (!mermaidAPI) return; // Don't render if mermaid API is not loaded yet

      try {
        // Decode the chart string to handle any HTML entities
        const decodedChart = decodeHtmlEntities(chart);
        
        // Generate a unique ID for rendering
        const chartId = 'mermaid-chart-' + Math.random().toString(36).substring(7);

        const { svg: renderedSvg } = await mermaidAPI.render(chartId, decodedChart);
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
  }, [chart, mermaidAPI]); // Re-run when chart or mermaidAPI is loaded

  return (
    <div 
      className="mermaid-chart-container" 
      ref={chartRef} 
      style={{textAlign: 'center', margin: '20px 0'}}
      dangerouslySetInnerHTML={{ __html: svg ?? (error ? error : 'Loading diagram...') }}
    >
      {/* Mermaid.js will inject the SVG here */}
    </div>
  );
};

export default MermaidRenderer;
