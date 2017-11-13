import React from "react";

// Render static HTML:
import __html from "./list.html";
import PostsApi from "../../../../api/PostsApi";

export class ViewPost extends React.Component {
  constructor(props) {
    super(props);
      this.state = {post:''};
  }
  componentDidMount() {
    PostsApi.get(this.props.params.id).then(post => {
      this.setState({post});
      debugger;
      console.log(post);
    });
  }
  render() {
    return <div>
        <div dangerouslySetInnerHTML={{__html}} />
          <h2>{this.state.post.title}</h2>
          <hr/>
          <h3>{this.state.post.description} </h3>
          <div>{this.state.post.content}</div>
          <div>
          <br/>
            <span>Date Published: {this.state.post.publish_date} </span><br/>
            <span>Author: {this.state.post.author} </span>
          </div>
    </div>
  }
}
