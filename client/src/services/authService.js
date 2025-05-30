import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const registerUser = async (formData) => {
  const response = await axios.post(`${apiUrl}/auth/register`, formData);
  return response.data;
};

export const loginUser = async (formData) => {
  const response = await axios.post(`${apiUrl}/auth/login`, formData);
  return response.data;
};

export const logoutUser = () => {};
