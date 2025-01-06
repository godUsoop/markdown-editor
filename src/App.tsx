import {useRef, useState } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import syncScroll from "./helper/syncScroll";


const App = () => {
	const [markdown, setMarkdown] = useState<string>(
		"# Example Markdown\n\n" +
		"## Another Section\n\n" +
		"### Another Section\n\n" +
		"Here are the sequence diagram rules that you need to follow.\n\n" +
		"!sequenceDiagram\n" +
		"Alice -> Bob: Hello Bob!\n" +
		"Bob --> Alice: Hi Alice!\n" +
		"Alice -> John: How are you?\n" +
		"!\n\n" +
		"More text with **bold** formatting and list item:\n" +
		"- List item 1\n" +
		"- List item 2"
);

	const editorRef = useRef<HTMLTextAreaElement>(null);
	const previewRef = useRef<HTMLDivElement>(null);
	
	const isSyncingFromEditor = useRef(false);
	const isSyncingFromPreview = useRef(false);

	const syncEditorToPreview = () => {
		syncScroll(editorRef.current, previewRef.current, isSyncingFromEditor, isSyncingFromPreview);
	};
	const syncPreviewToEditor = () => {
		syncScroll(previewRef.current, editorRef.current, isSyncingFromPreview, isSyncingFromEditor);
	};
	
	return (
		<div className="app">
			<aside className="sidebar">
				<header className="sidebar-header">File Explorer</header>
				<ul className="file-list">
				<li className="file">New File</li>
				<li className="file">New Folder</li>
				<li className="file">Example.md</li>
				</ul>
			</aside>

			<main className="main">
				<Editor
					editorRef={editorRef}
					markdown={markdown}
					setMarkdown={setMarkdown}
					syncEditorToPreview={syncEditorToPreview}
				/>
				<Preview
					previewRef={previewRef}
					markdown={markdown}
					syncPreviewToEditor={syncPreviewToEditor}
				/>
			</main>
		</div>
	);
};

export default App;