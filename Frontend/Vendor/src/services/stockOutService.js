import axios from "axios";

const API_URL =
  "http://localhost:5000/api/stockout";

export const getStockOut = () =>
  axios.get(API_URL);

export const addStockOut = (data) =>
  axios.post(API_URL, data);

export const updateStockOut = (
  id,
  data
) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteStockOut = (id) =>
  axios.delete(`${API_URL}/${id}`);