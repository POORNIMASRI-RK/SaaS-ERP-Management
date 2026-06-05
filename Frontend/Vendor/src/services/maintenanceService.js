import axios from "axios";

const API = "http://localhost:5000/api/maintenance";

export const getMaintenance = async () => {
  return await axios.get(API);
};

export const addMaintenance = async (data) => {
  return await axios.post(API, data);
};