import React from "react";

// Render static HTML:
import __html from "./list.html";

export class ViewPost extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div>
        <div dangerouslySetInnerHTML={{__html}} />

    </div>
  }
}
