import React, { useContext } from "react";
import "../styles/components/mainNavBar.css"
import logo from "../assets/MyCodeYourCode.png"
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../App";

// FIXME: Add user_id to param for vault url
interface AuthenticationNavButtonProps {
  onclickHandler: () => any
}

function AuthenticationButton(props: AuthenticationNavButtonProps) {
  return(<button id="main-navbar-menu-button" onClick={props.onclickHandler}><li>Login/Signup</li></button>);
}

export function MainNavBar() {
  const navigate = useNavigate()
  const loggedInUser = useContext(LoggedInUserContext)

  const goToHomePage = () => { navigate("/"); }
  const goToAboutPage = () => { navigate("/about"); }
  const goToUploadSnippetPage = () => { navigate("/snippets/upload"); }
  const goToSnippetsPage = () => { navigate("/snippets/search"); }
  const goToLoginPage = () => { navigate("/login"); }
  const goToUserDashboard = () => { navigate(`/vault/`);}

  return(
    <div style={{background: "rgb(210, 180, 140, 0.2)"}}>
      <nav id="main-navbar">
        <img id="main-navbar-logo" src={logo} alt="nav-logo" onClick={goToHomePage}/>
        <ul id="main-navbar-menu">
          <li className="main-navbar-menu-item" onClick={goToAboutPage}>About Us</li>
          <li className="main-navbar-menu-item" onClick={goToSnippetsPage}>Snippets</li>
          <li className="main-navbar-menu-item" onClick={goToUploadSnippetPage}>Upload Snippet</li>
          {(!loggedInUser) ?  <li className="main-navbar-menu-item" onClick={goToUserDashboard}> My Vault</li> : <AuthenticationButton onclickHandler={goToLoginPage}/> }
        </ul>
    </nav>
    </div>
  )
}