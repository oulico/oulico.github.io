import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidRendererProps {
  chart: string; // The Mermaid code as a string
}

const MermaidRenderer: React.FC<MermaidRendererProps> = ({ chart }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.initialize({
        startOnLoad: false, // We will manually start rendering
        theme: 'dark', // Align with our dark theme
        securityLevel: 'loose', // Allow external resources if needed, or set to 'strict'
        fontFamily: 'D2Coding, monospace', // Ensure Mermaid uses the custom font
      });

      try {
        // Generate a unique ID for the chart to avoid conflicts
        const chartId = 'mermaid-chart-' + Math.random().toString(36).substring(7);
        
        // Render the chart to an SVG
        mermaid.render(chartId, chart)
          .then(({ svg }) => {
            if (chartRef.current) {
              // Append the SVG to the ref's current element
              chartRef.current.innerHTML = svg;
            }
          })
          .catch(error => {
            console.error("Mermaid rendering failed:", error);
            if (chartRef.current) {
              chartRef.current.innerHTML = `<pre>${chart}</pre>`; // Fallback to raw code
            }
          });
      } catch (error) {
        console.error("Mermaid rendering failed synchronously:", error);
        if (chartRef.current) {
          chartRef.current.innerHTML = `<pre>${chart}</pre>`; // Fallback to raw code
        }
      }
    }
  }, [chart]); // Re-render if chart code changes

  return (
    <div className="mermaid-chart-container" ref={chartRef} style={{textAlign: 'center', margin: '20px 0'}}>
      {/* Mermaid.js will inject the SVG here */}
      Loading diagram...
    </div>
  );
};

export default MermaidRenderer;
