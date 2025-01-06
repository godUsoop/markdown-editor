import SequenceDiagram from "./SequenceDiagram";
import parseMarkdown from "./helper/parseMarkdown";
import Text from "./Text";

interface PreviewProps {
    previewRef: React.RefObject<HTMLDivElement | null>;
    markdown: string;
    syncPreviewToEditor: () => void;
}


const Preview = ({previewRef, markdown, syncPreviewToEditor}: PreviewProps) => {
    const parsedContent = parseMarkdown(markdown);
    return (
        <div 
            className="preview"
            ref={previewRef}
            onScroll={syncPreviewToEditor}
        >
            {parsedContent.map((block, index) =>
                block.type === 'text' ? (
                    <div key={index}>
                        <Text input={block.content}/>
                    </div>
                ) : (
                    <div key={index} className="uml-diagram">
                        <SequenceDiagram input={block.content} />
                    </div>
                )
            )}
      </div>
    )
};

export default Preview;