import { CopyBlock, a11yDark } from "react-code-blocks"
import defaultAvatar from "../assets/AdobeStock_557958891.jpeg"
import "../styles/pages/snippetSearchPage.css"
import { Snippet } from "../types/database/snippets.types"
import { SnippetSearchPageProps } from "../types/props/pageProps"
import { SnippetPopup } from "../components/SnippetPopup"
import { useState } from "react"

export function SnippetSearchPage(props: SnippetSearchPageProps) {
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
  const [selectedSnippet, setSelectedSnippet] = useState<Snippet|null>(null)
  function getInfoBackgroundColor(language: string): string {
    let color: string = "";
    switch(language)
    {
      case "javascript":
        color = "#FDDA0D";
        break;
      case "python":
        color = "#7393B3";
        break;
      case "php":
        color = "#BDB5D5";
        break;
      case "golang":
        color = "#00FFFF";
        break;
      case "c#":
        color ="#BF40BF"
        break;
      case "erlang":
        color = "#C41E3A";
        break;
      default: 
        color = "white"
        break;
    }
    return(color);
  }

  return (
    <div id="snippetSearchScreen">
      {selectedSnippet? <SnippetPopup open={popupIsOpen} setOpen={setPopupIsOpen} snippet={selectedSnippet} setSelectedSnippet={setSelectedSnippet}/>: undefined}
      <h1>Query Snippets</h1>
      <div id="snippetSearchScreen-div1" className="screen-section">
        <form id="snippet-filter-form">
          <label>Language:</label>
          <select name="language" id="snippet-form-language-filter" style={{width:"100px"}}>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
          <label>Min Upvotes:</label>
          <input type="number" defaultValue={0} min={0} id="snippet-form-upvotes-filter" style={{width:"50px", textAlign:"center"}}></input>
          <input type="button" value="Search" id="snippet-form-button"/>
        </form>
      </div>
      <div id="snippet-filter-results">
        {props.snippets.map((snippet:Snippet) => {
          return (
            <div className="filter-result-snippet-div">
              <CopyBlock text={snippet.code} language={snippet.language} wrapLongLines showLineNumbers startingLineNumber={1} theme={{...a11yDark, mode:"dark"}} codeBlock copied onCopy={(e) => console.log("copied")} customStyle={{overflow: "hidden",height: "80%"}}/>
              <div className="snippet-info-block" style={{backgroundColor: getInfoBackgroundColor(snippet.language)}} onClick={() => { setPopupIsOpen(true); setSelectedSnippet(snippet)} }>
                <div style={{ height: "70%", display:"flex", alignItems:"center", justifyContent:"center", marginLeft: "20px"}}>
                  <img className="snippet-author-image" alt="author-profile-img" src={defaultAvatar}/>
                </div>
                <p className="snippet-author-name">David Justice</p>
                <p className="snippet-upvotes">⬆️ {snippet.upvotes < 500 ? snippet.upvotes : "500+"}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}