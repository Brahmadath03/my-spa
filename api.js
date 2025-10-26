import axios from "axios";

const API = axios.create({
  baseURL: "https://mock-api-server.vercel.app", // use a mock server or JSONPlaceholder
});

// Mock endpoints simulation
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Mock responses for demo
API.post = async (url, body) => {
  if (url === "/login" && body.email && body.password) {
    return Promise.resolve({
      status: 200,
      data: { token: "mock-jwt-token" },
    });
  }
  return Promise.reject({ message: "Invalid credentials" });
};

API.get = async (url) => {
  if (url === "/dashboard") {
    return Promise.resolve({
      data: [
        { id: 1, title: "Task 1", description: "Complete documentation" },
        { id: 2, title: "Task 2", description: "API integration check" },
        { id: 3, title: "Task 3", description: "Prepare deployment" },
      ],
    });
  }
  if (url === "/profile") {
    return Promise.resolve({
      data: {
        name: "John Doe",
        email: "john@example.com",
        role: "Administrator",
      },
    });
  }
  return Promise.reject({ message: "Not Found" });
};

export default API;
