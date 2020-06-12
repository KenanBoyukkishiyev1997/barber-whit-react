import React from "react";
import Home from "./home";
import About from "./about";
import Gallery from "./gallery";
import SinglePost from "./single-post";
import Blog from "./blog";
import BlogPost from "./blog-post";
import Contact from "./contoct";
import { Switch, Route  } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Switch id="body">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/single-post" component={SinglePost} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-post" component={BlogPost} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

export default Main;
