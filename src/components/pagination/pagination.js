import React from 'react';
import './pagination.css';

const Pagination = ({ currentPage, totalCount, onPageChange, pageSize }) => {
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((pageNumber) => {
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
    </div>
  );
};
export default Pagination;
