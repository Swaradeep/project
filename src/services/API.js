import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

const doLogin = async (payload) => {
  try {
    const response = await API.post("/login", payload);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const doSignUp = async (payload) => {
  try {
    const response = await API.post("/signup", payload);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getConnections = async (email) => {
  try {
    const response = await API.get(`/connections/${email}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getRecomendedConnections = async (email) => {
  try {
    const response = await API.get(`/recommendations/${email}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const createConnection = async (payload) => {
  try {
    const response = await API.post("/addConnection", payload);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  doLogin,
  doSignUp,
  getConnections,
  getRecomendedConnections,
  createConnection,
};
