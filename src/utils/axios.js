/* eslint-disable no-alert */
import axios from 'axios';

const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
  timeout: 5000
});
// 请求拦截器(请求成功,请求失败)
axios.interceptors.request.use(
  (config) => {
    // 提供了每一次请求发出之前修改配置的机会
    return config;
  }
  //   (error) => {
  //     console.log(error);
  //   }
);
// 响应拦截器(收到响应,没收到响应)
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    switch (error.response.status) {
      case 400:
        alert('请求参数或格式不正确');
        break;
      case 401:
        alert('没有权限,请先登录');
        break;
      case 403:
        alert('禁止访问!');
        break;
      case 404:
        alert('请求路径错误,请仔细核对');
        break;
      default:
        break;
    }
  }
);

export default http;
