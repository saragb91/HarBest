import { useCallback, useEffect, useState } from "react";

import {
  createProducts,
  fetchProductByPage,
  removeProducts,
  updateProducts,
} from "../services/api";

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [form, setForm] = useState({ product: "", status: "activo" });
  const [filter, setFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("activo");

  const pages = new Array(totalPages).fill(null).map((_, i) => i);

  useEffect(() => {
    fetchProductByPage(pageNumber)
      .then((res) => res.json())
      .then(({ totalPag, products }) => {
        setProducts(products);
        setTotalPages(totalPag);
      });
  }, [pageNumber]);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const handleFilter = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleAddProduct = useCallback(() => {
    setForm({ product: "", status: "activo" });
    setShowModal(true);
  }, []);

  const handleEditProduct = useCallback((product) => {
    setForm(product);
    setShowModal(true);
  }, []);

  const handleSave = useCallback(
    (id) => {
      const formWithStatus = { ...form, status: form.status || "activo" };

      if (id) {
        updateProducts(id, formWithStatus).then((product) => {
          setProducts(product.data);
          setShowModal(false);
        });
        return;
      }
      createProducts(formWithStatus).then((product) => {
        setProducts([...products, { ...product.data }]);
      });

      setShowModal(false);
    },
    [form, products]
  );

  const handleRemoveProduct = useCallback((id) => {
    removeProducts(id).then((product) => {
      setProducts(product.data);
    });
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const toggleFilter = useCallback(() => {
    setFilter(!filter);
  }, [filter]);

  const handleChangePage = useCallback(
    (type) => {
      switch (type) {
        case "previous": {
          return setPageNumber(Math.max(0, pageNumber - 1));
        }
        default: {
          return setPageNumber(Math.min(totalPages - 1, pageNumber + 1));
        }
      }
    },
    [pageNumber, totalPages]
  );

  return {
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
  };
};
export default useProductList;
