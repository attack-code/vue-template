import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

/**
 * 处理服务的token
 * @param config 请求的axios参数
 * @returns 处理后的请求的axios参数
 */
const handleRequestToken = (config: AxiosRequestConfig) => {
  // 这里要根据项目获取真实的token，从vuex或者本地存储中获取
  const token = Cookies.get("ds-token");
  if (!token) {
    return config;
  }
  if (config && config.headers) {
    config.headers.token = token;
  }
  return config;
};

export default handleRequestToken;
