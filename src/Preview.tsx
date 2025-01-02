import { JSX } from "react";

interface PreviewProps {
    previewRef: React.RefObject<HTMLDivElement | null>;
    markdown: string;
    syncPreviewToEditor: () => void;
}


const Preview = ({previewRef, markdown, syncPreviewToEditor}: PreviewProps) => {
    const parseMarkdownToReact = (markdown: string): JSX.Element[] => {
        const lines = markdown.split("\n");
	
		return lines.map((line, index) => {
		  if (line.startsWith("# ")) {
			return <h1 key={index}>{line.slice(2)}</h1>;
		  } else if (line.startsWith("## ")) {
			return <h2 key={index}>{line.slice(3)}</h2>;
		  } else if (line.startsWith("### ")) {
			return <h3 key={index}>{line.slice(4)}</h3>;
		  } else if (line.startsWith("**") && line.endsWith("**")) {
			return <strong key={index}>{line.slice(2, -2)}</strong>;
		  } else if (line.trim() === "") {
			return <br key={index} />;
		  } else {
			return <p key={index}>{line}</p>;
		  }
		});
	  };
	
	  const renderedElements = parseMarkdownToReact(markdown);
    return (
        <div
          ref={previewRef}
          className="preview"
          onScroll={syncPreviewToEditor}
        >
          {renderedElements}
        </div>
    )
};

export default Preview;