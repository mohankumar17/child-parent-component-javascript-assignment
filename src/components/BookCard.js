import React from "react";
import BookCover from "./BookCover";
import BookDetails from "./BookDetails";
import './BookCard.css'

function BookCard() {
  return (
    <div className="card">
      <div className="rect">
        <BookCover></BookCover>
        <BookDetails></BookDetails>
      </div>
    </div>
  );
}

export default BookCard;
