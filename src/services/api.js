import axios from "axios";

const productsService = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/products`,
});
export const createProducts = (data) => productsService.post("/", data);
export const updateProducts = (id, data) => productsService.put(`/${id}`, data);

export const removeProducts = (id) => productsService.delete(`/${id}`);
export const fetchProductByPage = (pageNumber) => {
  return fetch(`${process.env.REACT_APP_URL}/products/?page=${pageNumber}`);
};
