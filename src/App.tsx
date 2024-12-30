import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";

const App = () => {
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
	  	<Editor/>
        <Preview/>
      </main>
    </div>
  );
};

export default App;