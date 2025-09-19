import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (userData) => axios.post(`${API_URL}/users`, userData);
export const updateUser = (id, updatedData) => axios.put(`${API_URL}/users/${id}`, updatedData);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
