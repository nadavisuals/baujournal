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

// <Button key={number} className="page-item" variant="primary" type="submit" onClick={() => paginate(number)}>{number}</Button>
//<Button variant="primary" onClick={() => { paginate(number)}  className="page-link">{number}</Button>

<li key={number} className="page-item">
<Button variant="primary" onClick={() =>  paginate(number)}> {number} </Button> &nbsp;
</li>

          // <li key={number} className="page-item">
          //   <a onClick={() => paginate(number)}  className="page-link">
          //     {number}
          //   </a>
          // </li>

        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
