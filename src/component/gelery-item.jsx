import React from "react";
import { Link } from "react-router-dom";

const GalleryItem = (props) => {
  return (
    <li>
      <Link to="/single-post">
        <img src={props.src} alt="" />
      </Link>
    </li>
  );
};

export default GalleryItem;
