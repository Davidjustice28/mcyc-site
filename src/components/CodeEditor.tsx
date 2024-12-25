import React, { useState } from "react"
import { CopyBlock, a11yDark } from "react-code-blocks"
import { Snippet } from "../types/database/snippets.types"

export interface CodeSnippetViewProps {
  snippet: Snippet
  height?: string,
  width?: string
}

export interface CodeEditorProps {
  code: string,
}

export function CodeSnippetView(props: CodeSnippetViewProps) {
  return(
    <CopyBlock text={props.snippet.code} language={props.snippet.language} wrapLongLines showLineNumbers startingLineNumber={1} theme={{...a11yDark, mode:"dark"}} codeBlock copied onCopy={(e) => console.log("copied")} customStyle={{overflow: "hidden",height: (props.height ?? "80%"), width: props.width}}/>
  )
}

export function CodeEditor(props: CodeEditorProps) {
  const [lineNumbers, setLineNumbers] = useState(1);
  const [code, setCode] = useState(`${lineNumbers} ${props.code}`)
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

  return(
    <textarea rows={20} cols={100} style={{backgroundColor:"#28231d", color:"white"}} onKeyUp={handleInput} value={code} onChange={() => {return}} id="snippet-upload-text-editor"/>
  )
}