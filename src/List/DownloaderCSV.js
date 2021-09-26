import React from "react";
import { CSVLink } from "react-csv";

const DownloaderCSV = ({ products }) => {
  const headers = [
    { label: "Producto", key: "product" },
    { label: "Estado", key: "status" },
  ];
  const csvReport = {
    filename: "Products.csv",
    headers: headers,
    data: Object.values(products),
  };
  return (
    <CSVLink {...csvReport}>
      <button className="common-button download-button">
        <span className="material-icons file_download">file_download</span>
        Descargar CSV
      </button>
    </CSVLink>
  );
};
export default DownloaderCSV;
