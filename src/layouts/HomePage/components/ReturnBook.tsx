import React from "react";
import BookModel from "../../../models/BookModel";
import { Link } from "react-router-dom";

export const ReturnBook : React.FC<{book: BookModel}> = ({book}) => {
  const {id, title, author, img} = book;
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {img ? <img
          src={img}
          width="151"
          height="233"
          alt="book"
        /> : <img
          src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
          width="151"
          height="233"
          alt="book"
        />} 
        <h6 className="mt-2">{title}</h6>
        <p>{author}</p>
        <Link className="btn main-color text-white" to={`checkout/${id}`}>
          Reserve
        </Link>
      </div>
    </div>
  );
};
