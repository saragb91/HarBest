import React from "react";

const Pagination = ({ onChangePage, setPageNumber, pages = [] }) => {
  return (
    <div className="pagination">
      <button
        className="common-button"
        onClick={() => onChangePage("previous")}
      >
        Anterior
      </button>
      {pages.map((pageIndex) => (
        <button
          className="common-button"
          key={pageIndex}
          onClick={() => setPageNumber(pageIndex)}
        >
          {pageIndex + 1}
        </button>
      ))}
      <button className="common-button" onClick={() => onChangePage("next")}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
