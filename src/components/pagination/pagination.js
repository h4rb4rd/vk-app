import React, { useState } from 'react';
import './pagination.css';

const Pagination = ({ currentPage, totalCount, onPageChange, pageSize, portionSize = 15 }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setportionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className="pagination">
      {portionNumber > 1 && (
        <button
          className="pagination__btn pagination__btn--prev"
          onClick={() => {
            setportionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((pageNumber) => {
          return (
            <span
              onClick={() => {
                onPageChange(pageNumber);
              }}
              key={pageNumber}
              className={currentPage === pageNumber ? 'selected-page' : ''}
            >
              {pageNumber}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className="pagination__btn pagination__btn--next"
          onClick={() => {
            setportionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Pagination;
