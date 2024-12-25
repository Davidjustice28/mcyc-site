import { useState } from "react";
import { ScreenSection } from "../components/Screen";
import "../styles/pages/loginPage.css"

export function LoginPage() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState<string>("")
  const [emailNoticeDisplayed, setEmailNoticeDisplayed] = useState<boolean>(false)
  const [passwordNoticeDisplayed, setpasswordNoticeDisplayed] = useState<boolean>(false)


  function loginUser() {
    if(email.length < 1 || !email.includes("@"))
    {
      setEmailNoticeDisplayed(true)
    }
    else if(password.length < 1)
    {
      console.log("password is too short")
      setpasswordNoticeDisplayed(true)
    }
    else {
      console.log({email, password})
      const resetValue = "";
      setPassword(resetValue)
      setEmail(resetValue)
    }
  }

  return(
    <div id="login-page">
      <ScreenSection  id="login-screen" backgroundColor="black" height="95vh">
        <h1 style={{color: "white"}}>Welcome Back</h1>
        <form id="login-form">
          <label>Email Address:</label>
          <input id="login-form-email" onChange={(e) => {
            const display = false
            setEmailNoticeDisplayed(display)
            setEmail(e.target.value);
          }} value={email}/>
          <small id="email-notice" style={{display: emailNoticeDisplayed ? "inline" : "none"}}>Please enter a valid email</small>
          <label>Password:</label>
          <input id="login-form-password" onChange={(e) => {
            const display = false
            setPassword(e.target.value);
            setpasswordNoticeDisplayed(display);
          }} value={password}/>
          <small id="password-notice" style={{display: passwordNoticeDisplayed ? "inline" : "none"}}>Please enter a password</small>
          <button id="login-form-button" onClick={(e) => {
            e.preventDefault();
            loginUser()
          }}>Login</button>
        </form>
      </ScreenSection>
    </div>
  )
}