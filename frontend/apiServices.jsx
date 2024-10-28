import axiosInstance from "./src/Config/axiosInstance";

const apiServices = {
  userLogin: (user) => axiosInstance.post("/api/loginregister/login", user),
  registerUser: (userData) =>
    axiosInstance.post("api/loginregister/register", userData),
};

export default apiServices;
