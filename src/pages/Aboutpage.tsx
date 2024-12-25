import { ScreenSection } from "../components/Screen";

export function AboutPage() {
  return(
   <div id="about-page">
      <ScreenSection backgroundColor="#28231d" height="100vh" id="aboutpage-summary-section"></ScreenSection>
      <ScreenSection backgroundColor="#FAF9F6" height="100vh" id="aboutpage-faq-section"></ScreenSection>
   </div>
  )
}