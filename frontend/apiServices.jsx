import axiosInstance from "./src/Config/axiosInstance";

const apiServices={
    userLogin:(user)=>axiosInstance.get('/api/loginregister/login',user),
    registerUser:(userData)=>axiosInstance.post('api/loginregister/register',userData),
}

export default apiServices;