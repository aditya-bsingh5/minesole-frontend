import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src="images/blog-1.jpg"
          className="img-fluid w-100"
          alt="blog card img"
        />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec 2022</p>
        <h5 className="title">Feminism in Rural</h5>
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque autem
          placeat a assumenda dicta! Quisquam maiores impedit, amet odio nemo
          neque quae vero iste minima, harum officia ad, possimus id.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
