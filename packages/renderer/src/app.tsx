import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import 'ace-builds/src-noconflict/ext-language_tools';
import './app.css';



const App: React.FC = ()=>{
    return(
	<div className="container">
	  <AceEditor
	
	    className="editor"
	    mode="javascript"
	    theme="dracula"
	    setOptions={{
		enableBasicAutocompletion: true,
		enableLiveAutocompletion: true
	    }}
	    name="UNIQUE_ID_OF_DIV"
	    editorProps={{ $blockScrolling: true }}
	  />  
	    <div className="result">
		<h2>OUTPUT</h2>
		<div className="content">

		</div>
	    </div>
	</div>
    )


}


export default App;
