import axios from "axios";

const API = "http://localhost:5000/api/vendors";

export const getVendors = () => axios.get(API);

export const addVendor = (vendor) =>
  axios.post(API, vendor);

export const updateVendor = (id, vendor) =>
  axios.put(`${API}/${id}`, vendor);

export const deleteVendor = (id) =>
  axios.delete(`${API}/${id}`);