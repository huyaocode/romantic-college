import axios from 'axios';
import { Toast } from 'antd-mobile';

/**
 * 拦截请求
 * 所有的axios请求都会在这里背拦截，通过这个就可以设置加载动画
 */

axios.interceptors.request.use(config => {
  Toast.loading('加载中', 0);
  return config;
});

axios.interceptors.response.use(config => {
  Toast.hide();
  return config;
});
