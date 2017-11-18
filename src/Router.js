// React
import React from "react";
import PropTypes from 'prop-types';
import {render} from "react-dom";
import {Router, Route, IndexRoute, Redirect, browserHistory} from "react-router";
import { Provider } from 'react-redux';

// Our app
import App       from "./app/App";
import { About } from "./app/about/About";
import  Home   from "./app/home/Home";
import ViewPost from "./app/home/posts/ViewPost";

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="home" component={Home}/>
          <Route path="posts/:id" component={ViewPost}/>
          <Redirect from="*" to="/home"/>
        </Route>
      </Router>
    </Provider>
  )
}


Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
