import { RefObject } from "react";

interface EditorProps {
    editorRef: RefObject<HTMLTextAreaElement | null>;
    markdown: string;
    setMarkdown: (markdown: string) => void;
    syncEditorToPreview: () => void;
}

const Editor = ({editorRef, markdown, setMarkdown, syncEditorToPreview}: EditorProps) => {
    return (
        <div className="editor">
            <textarea
                ref={editorRef}
                className="markdown-input"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                onScroll={syncEditorToPreview}
            />
        </div>
    )
}

export default Editor;