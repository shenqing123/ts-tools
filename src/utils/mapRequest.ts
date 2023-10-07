import axios, { AxiosResponse } from "axios";

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_XZD_BASE_API_8000,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data;
    if (code === 200) {
      return response.data;
    }

    ElMessage.error(msg || "系统出错");
    return Promise.reject(new Error(msg || "Error"));
  },
  (error: any) => {
    if (error.response.data) {
      const { msg } = error.response.data;
      // token 过期,重新登录

      ElMessage.error(msg || "系统出错");
    }
    return Promise.reject(error.message);
  }
);
// 导出 axios 实例
export default service;
