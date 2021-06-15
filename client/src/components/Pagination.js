import React from "react";
import { Button } from "react-bootstrap";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination mt-5">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Button 
              variant="outline-primary" 
              onClick={(e) => {
                paginate(number);
                e.preventDefault()
                }}>
              {" "}
              {number}{" "}
            </Button>{" "}
            &nbsp;
          </li>
        ))}
      </ul>
    </nav>
  );

};

export default Pagination;
