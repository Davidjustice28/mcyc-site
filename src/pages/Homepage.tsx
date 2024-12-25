import React from "react";
import { ScreenSection } from "../components/Screen";
import "../styles/components/screen.css"

export function HomePage() {
  return(
    <div id="home-page">
      <ScreenSection backgroundColor="#FAF9F6" height="95vh" color="white" id="homepage-header">
        <div id="homepage-header-top">
          <h1 style={{fontSize:"50px", fontStyle:"italic", fontWeight:"bold"}}>Get The Code You Need. Fast!</h1>
          <p style={{fontSize:"17px", position:"relative", bottom: "20px"}}>Sometimes you just want to find a working solution and copy that 💩. You're welcome!</p>
          <div id="home-header-image"></div>
        </div>
        <div id="homepage-header-cta-strip">
        </div>
      </ScreenSection>
      <ScreenSection backgroundColor="#FAF9F6" height="100vh" id="homepage-features-section"></ScreenSection>
      <ScreenSection backgroundColor="black" height="100vh" id="homepage-homepage-popular-categories"></ScreenSection>
    </div>
  )
}