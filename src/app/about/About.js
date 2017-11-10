import React from "react";

// Render static HTML:
import __html from "./about.html";

export class About extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}} />;
  }
}
