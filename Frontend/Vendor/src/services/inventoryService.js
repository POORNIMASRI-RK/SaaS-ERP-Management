import axios from "axios";

const API_URL = "http://localhost:5000/api/inventory";

export const getInventory = () => axios.get(API_URL);
export const addInventory = (data) => axios.post(API_URL, data);
export const updateInventory = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteInventory = (id) =>
  axios.delete(`${API_URL}/${id}`);