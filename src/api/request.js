import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"

// 创建axios实例
const requests = axios.create({
    // 基础路径
    baseURL: '/api',
    // 超时
    timeout: '3000',
});

// 请求拦截器
requests.interceptors.request.use((config) => {
    // 进度条开始
    nProgress.start();
    return config;
})

requests.interceptors.response.use((res) => {
    nProgress.done();
    return res.data;
}, (error) => {
    nProgress.done();
    return Promise.reject(new Error(error));
})

export default requests;

