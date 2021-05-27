import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination mt-5">
        {pageNumbers.map((number) => (

          <li key={number} className="page-item">
            <Button variant="outline-primary" onClick={() => paginate(number)}> {number} </Button> &nbsp;
          </li>

        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
