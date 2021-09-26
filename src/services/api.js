import axios from "axios";

const productsService = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/list`,
});
export const createProducts = (data) =>
  productsService.post("/newProduct", data);
export const updateProducts = (id, data) =>
  productsService.put(`/updateProduct/${id}`, data);

export const removeProducts = (id) =>
  productsService.delete(`/removeProduct/${id}`);
export const fetchProductByPage = (pageNumber) => {
  return fetch(
    `${process.env.REACT_APP_URL}/list/filteredProductList?page=${pageNumber}`
  );
};
