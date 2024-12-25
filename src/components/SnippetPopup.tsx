import Popup from "reactjs-popup"
import "../styles/components/snippetPopup.css"
import { Snippet } from "../types/database/snippets.types"
import { CodeSnippetView } from "./CodeEditor"
import {FaStar, FaEdit, FaVoteYea, FaUser} from "react-icons/fa"

export interface SnippetPopupProps {
  open: boolean,
  setOpen: any,
  snippet: Snippet,
  setSelectedSnippet: any
}

export function SnippetPopup(props: SnippetPopupProps) {
  return(
    <Popup position={"center center"} open={props.open} defaultOpen={false} onClose={() => {props.setOpen(false); props.setSelectedSnippet(null)}} modal={true} >
        <div id="code-snippet-popup">
          <CodeSnippetView snippet={props.snippet} width="80%" height="300px"/>
          <h2 style={{fontSize:"18px", textDecoration:"underline"}}>Code Description</h2>
          <p style={{width: "60%", height:"50px", textAlign:"center"}}>{props.snippet.description.length > 0 ? props.snippet.description : "N/A"}</p>
          <div id="snippet-popup-info-bar" style={{border:"2px solid black", width: "30%", marginBottom:"10px"}}>
            <p><FaUser/> @{props.snippet.author_username}</p>
            <p><FaVoteYea/> {props.snippet.upvotes}</p>
          </div>
          <div id="code-snippet-popup-buttons">
            <button id="code-snippet-favorite-button"><FaStar/>Favorite</button>
            <button id="code-snippet-other-button"><FaEdit/>Edit</button>
          </div>
        </div>
    </Popup>
  )
}