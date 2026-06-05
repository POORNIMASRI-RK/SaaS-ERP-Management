import axios from "axios";

const API_URL = "http://localhost:5000/api/machines";

// GET all machines
export const getMachines = () => axios.get(API_URL);

// ADD machine
export const addMachine = (data) => axios.post(API_URL, data);

// UPDATE machine
export const updateMachine = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

// DELETE machine
export const deleteMachine = (id) =>
  axios.delete(`${API_URL}/${id}`);