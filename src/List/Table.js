import React from "react";

const Table = ({ products = [], onEditProduct, onRemoveProduct, search }) => {
  const filterResult =
    products.filter((product) => {
      return product.status === search;
    }) || [];

  return (
    <table className="list-table">
      <thead className="table-fixed">
        <tr>
          <th className="th-table">Producto</th>
          <th className="th-table">Estado</th>
          <th className="th-table" colSpan={3}></th>
        </tr>
      </thead>
      <tbody>
        {filterResult.length === 0 ? (
          <tr>
            <td>No hay resultados </td>
          </tr>
        ) : (
          filterResult.map((product) => (
            <tr key={product._id}>
              <td className="th-table">{product.product}</td>
              <td className="th-table">{product.status}</td>
              <td className="th-table" colSpan={3}>
                <span
                  className="material-icons edit"
                  onClick={() => onEditProduct(product)}
                >
                  edit
                </span>
                <span
                  className="material-icons delete"
                  onClick={() => onRemoveProduct(product._id)}
                >
                  delete
                </span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
