import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (userData: {
  name: string;
  email: string;
  password: string;
  year: string;
}) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export const login = async (userData: { email: string; password: string }) => {
  return axios.post(`${API_URL}/login`, userData, { withCredentials: true });
};

export const logout = async () => {
  return axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
};
