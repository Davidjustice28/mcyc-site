import { useContext, useState } from "react";
import { ScreenSection } from "../components/Screen";
import "../styles/pages/snippetUploadPage.css";
import { SnippetUploadPageProps } from "../types/props/pageProps";
import { Snippet } from "../types/database/snippets.types";
import { LoggedInUserContext } from "../App";

//FIXME: needs to check to make sure user is logged in
//FIXME: add description form
export function SnippetUploadPage(props:SnippetUploadPageProps) {
  const loggedInUser = useContext(LoggedInUserContext)
  const [lineNumbers, setLineNumbers] = useState(1);
  const [code, setCode] = useState(`${lineNumbers} `)
  const [languageInput, setLanguageInput] = useState("javascript")
  const [categoryInput, setCategoryInput] = useState("core concepts")
  

  const ignoreKeys = ["Shift", "CapsLock", "Control"]
  function handleInput(e:any) {
    const keyPressed = e.key as string

    if(!ignoreKeys.includes(e.key) && !keyPressed.includes("Arrow"))
    {
      if(e.key === "Enter")
      {
        const prevLines = lineNumbers;
        const newLines = prevLines + 1;
        setLineNumbers(newLines)
        setCode(`${code}\n${newLines} `)
      }
      else if(e.key === "Backspace")
      {
        const newCode = code.split("").slice(0, -1).join("")
        setCode(newCode)
      }
      else if(keyPressed.includes("Arrow"))
      {
        console.log("found arrow command")
      }
      else
      {
        setCode(code+e.key)
      }
    }
  }
  function handleSnippetSubmission() {
    const sanitizedCode: string = code.split("\n").map((row: string) => row.slice(2)).join("\n");
    console.log({sanitizedCode});
    const newSnippet: Snippet = {
      id:"test_snippet_id",
      author_id: "test_author_id",
      code:sanitizedCode,
      language: languageInput,
      category: categoryInput,
      uploadDate: new Date().toISOString(),
      upvotes: 0,
      author_username: loggedInUser ? loggedInUser.username : "test_username",
      description:""
    }
    props.uploadSnippetFunction(newSnippet)
  }

  function clearEditor() {
    const newLines = 1;
    setLineNumbers(newLines);
    setCode(`${newLines} `);
  }
  return(
    <div id="snippet-upload-page">
      <ScreenSection backgroundColor="gray" height="100vh" id="snippet-upload-screen">
        <form id="snippet-upload-form">
          <label>Language:</label>
          <select name="language" id="snippet-upload-form-language" style={{width:"150px"}} onChange={(e)=> setLanguageInput(e.target.value)}>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
          <label>Category:</label>
          <select name="category" id="snippet-upload-form-category" style={{width:"150px"}} onChange={(e)=> setCategoryInput(e.target.value)}>
            <option value="core concepts">Core Concepts</option>
            <option value="datatypes">Data Types</option>
            <option value="apis">APIs</option>
            <option value="algorithms">Algorithms</option>
            <option value="functions">Functions</option>
            <option value="security">Security</option>
          </select>
          <label>Code Snippet:</label>
          <textarea rows={20} cols={100} style={{backgroundColor:"#28231d", color:"white"}} onKeyUp={handleInput} value={code} onChange={() => {return}} id="snippet-upload-text-editor"/>
          <div id="snippet-form-buttons">
            <input type="button" value="Submit" id="snippet-form-submit-button" onClick={handleSnippetSubmission}/>
            <input type="button" value="Clear" id="snippet-form-clear-button" onClick={clearEditor}/>
          </div>
        </form>
      </ScreenSection>
    </div>
  )
}