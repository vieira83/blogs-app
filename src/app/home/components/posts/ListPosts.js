import React from "react";
import {Router, Link} from 'react-router';

const ListPosts = (props) => {
  return
  (<div>
    props.posts.map( post => {
    <div key={post.id} className="post-info">
      <div className="post-content">
        <Link to={`/posts/${post.id}`} className="post-link">
          <h4 className="title">{post.title}</h4>
          <h5 dangerouslySetInnerHTML={{__html:post.description}} />
          <div dangerouslySetInnerHTML={{__html:post.content}} className="truncate" />
        </Link>
      </div>
    </div>
  })
  </div>
)
}

export default ListPosts;
