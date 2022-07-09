import { AxiosResponse } from "axios";

/**
 * 对服务端返回的数据处理
 * code !== 200 的都是有异常的
 * @param response axios 响应消息
 * @returns
 */
const handleResponseFilter = (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
  const { data } = response;
  if (data.code !== 200) {
    return Promise.reject(response);
  }
  return response;
};

export default handleResponseFilter;
