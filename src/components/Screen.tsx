import React, { PropsWithChildren } from "react";
import { ScreenProps } from "../types/props/screenProps";
import "../styles/components/screen.css"

export function ScreenSection({backgroundColor, color, height, children, id}: PropsWithChildren<ScreenProps>) {
  return(
    <div className="screen-section" style={{backgroundColor, color, height}} id={id}>{children}</div>
  )
}