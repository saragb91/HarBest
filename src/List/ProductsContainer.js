import React from "react";
import useProductList from "../hooks/useProductList";
import Table from "./Table";
import TableBar from "./TableBar";
import ModalForm from "./ModalForm";
import Pagination from "./Pagination";
import "./ProductsContainer.css";
import "../Common.css";
import { Link } from "react-router-dom";

const ProductsContainer = () => {
  const {
    products,
    form,
    filter,
    showModal,
    search,
    toggleFilter,
    handleChange,
    handleAddProduct,
    handleEditProduct,
    handleRemoveProduct,
    handleSave,
    handleFilter,
    handleCloseModal,
    handleChangePage,
    setPageNumber,
    pages,
  } = useProductList();

  return (
    <div className="container-list">
      <Link className="back-link" to="/">
        Volver
      </Link>
      {showModal && (
        <ModalForm
          form={form}
          onChange={handleChange}
          onSave={handleSave}
          onCloseModal={handleCloseModal}
        />
      )}

      <div className="container-table">
        <TableBar
          filter={filter}
          toggleFilter={toggleFilter}
          onAddProduct={handleAddProduct}
          products={products}
        />
        {filter && (
          <div className="div-filter">
            <select
              className="filter-input"
              value={search}
              onChange={handleFilter}
            >
              <option key="activo" value="activo">
                Activo
              </option>
              <option key="oculto" value="oculto">
                Oculto
              </option>
            </select>
          </div>
        )}
        {
          <Table
            products={products}
            onEditProduct={handleEditProduct}
            onRemoveProduct={handleRemoveProduct}
            search={search}
          />
        }
        <Pagination
          onChangePage={handleChangePage}
          setPageNumber={setPageNumber}
          pages={pages}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
