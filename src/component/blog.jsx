import React from "react";
import BlogItem from './blog-item'

const Blog = () => {
  return (
    <div id="body">
      <h1>
        <span>blog</span>
      </h1>
      <div>
        <ul>
          <BlogItem src={'./asset/images/cutting-mustache.jpg'} title={'WHY I GREW A MUSTACHE'} subtitle={"This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text."} />
          <BlogItem src={'./asset/images/in-the-country.jpg'} title={'IN THE COUNTRY'} subtitle={"Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website!"} />
          <BlogItem  src={'./asset/images/mustache-brothers.jpg'} title={'THE MUSTACHE BROTHERS'} subtitle={"Wix is an online website builder with a simple drag & drop interface, meaning you do the work online and instantly publish to the web. Nothing to download, nothing to upload."}/>
     
        </ul>
      </div>
    </div>
  );
};

export default Blog;
