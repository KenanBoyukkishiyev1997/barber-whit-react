import React from "react";
import { Link } from "react-router-dom";

const GalleryItem = (props) => {
  return (
    <li>
      <Link to="/blog-post" class="figure">
        <img src={props.src} alt="" />
      </Link>
      <div>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <Link to="/blog-post" class="more">
          read this
        </Link>
      </div>
    </li>
  );
};

export default GalleryItem;
