import axios, { AxiosInstance } from "axios";
import { App, inject } from "vue";

import axiosConfig from "@/axios/config";
import { useRequestInterceptor } from "@/axios/interceptors/request";
import handleRequestToken from "@/axios/interceptors/request/token";
import { useResponseInterceptor } from "@/axios/interceptors/response";
import handleResponseFilter from "@/axios/interceptors/response/filterResponse";

// 设置超时时间是1分钟
axios.defaults.timeout = 60 * 1000;

const axiosService = useRequestInterceptor(
  useResponseInterceptor(axios.create(axiosConfig), [handleResponseFilter]),
  [handleRequestToken]
);

interface IAxiosService {
  install(app: App): void;
}

const AxiosService: IAxiosService = {
  install(app: App) {
    app.config.globalProperties.$axiosService = axiosService;
    app.provide("axiosService", axiosService);
  },
};

const useAxiosService = (): AxiosInstance => {
  const as = inject<AxiosInstance>("axiosService");
  if (as) {
    return as;
  }
  return axiosService;
};

export { AxiosService };

export default useAxiosService;
