import React from "react";
import "./BookDetails.css";

function BookDetails() {
  return (
    <div>
      <p className="title">Beyond Entrepreneurship</p>
      <p className="author">{"Jim Collins & Bill Lazier"}</p>
      <div className="read">
        <img
          src={require("./Vector.png")}
          className="clock-icon"
          alt="clock-img"
        />
        <span className="time">13-minute read</span>
      </div>

      <div className="status">
        <p>Read again</p>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default BookDetails;
