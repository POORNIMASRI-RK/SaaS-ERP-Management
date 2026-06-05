import axios from "axios";

const API_URL =
  "http://localhost:5000/api/stockin";

export const getStockIn = () =>
  axios.get(API_URL);

export const addStockIn = (data) =>
  axios.post(API_URL, data);

export const updateStockIn = (
  id,
  data
) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteStockIn = (id) =>
  axios.delete(`${API_URL}/${id}`);