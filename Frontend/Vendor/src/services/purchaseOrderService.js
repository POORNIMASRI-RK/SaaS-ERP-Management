import axios from "axios";

const API_URL =
  "http://localhost:5000/api/purchaseorders";

export const getPurchaseOrders = () =>
  axios.get(API_URL);

export const addPurchaseOrder = (
  data
) => axios.post(API_URL, data);

export const updatePurchaseOrder = (
  id,
  data
) =>
  axios.put(`${API_URL}/${id}`, data);

export const deletePurchaseOrder = (
  id
) => axios.delete(`${API_URL}/${id}`);