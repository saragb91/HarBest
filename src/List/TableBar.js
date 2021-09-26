import React from "react";
import DownloaderCSV from "./DownloaderCSV";

const TableBar = ({ filter, toggleFilter, onAddProduct, products }) => {
  return (
    <div className="tablebar-buttons">
      <div className="filter-icon">
        {!filter ? (
          <span className="material-icons filter_alt" onClick={toggleFilter}>
            filter_alt
          </span>
        ) : (
          <span className="material-icons expand_more" onClick={toggleFilter}>
            expand_more
          </span>
        )}
      </div>
      <div className="div-create-button ">
        <button className="common-button table-button" onClick={onAddProduct}>
          <span className="material-icons add_circle">add_circle_outline</span>
          Crear
        </button>
      </div>
      <div className="download-csv">
        <DownloaderCSV products={products} />
      </div>
    </div>
  );
};

export default TableBar;
