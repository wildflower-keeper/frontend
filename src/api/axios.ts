import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { Interceptor } from "./__type__";
import { V1_UNUSING_TOKEN_API } from "./v1/common.const";
import { isArray } from "lodash";
import { getCookie } from "@/utils/cookie";

const customAxios = axios.create({
  baseURL: "https://api.wildflower-gardening.com",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    // 창수
  },
});

const requestInterceptor: Interceptor<InternalAxiosRequestConfig> = {
  onFulfilled: (config) => {
    const { method, url } = config;

    const unUseTokenCondition = V1_UNUSING_TOKEN_API.some(
      (api) => api.method === method && url?.includes(api.path),
    );

    if (!unUseTokenCondition)
      config.headers.set("auth-token", getCookie("authToken"));

    return config;
  },
  onRejected: (error) => {
    return error;
  },
};

const responseInterceptor: Interceptor<AxiosResponse> = {
  onFulfilled: (config) => {
    if (config.status >= 400) {
      const code = config.data?.code || config.statusText;
      const messageInConfig =
        config.data.message || config.data?.error?.message;

      const message =
        typeof messageInConfig === "string"
          ? messageInConfig
          : isArray(messageInConfig)
            ? messageInConfig.find((v: any) => v) || config.statusText
            : config.statusText || messageInConfig;

      throw new AxiosError(message, code, undefined, undefined, config);
    }

    return config;
  },
  onRejected: (error) => {
    return error;
  },
};

customAxios.interceptors.request.use(
  requestInterceptor.onFulfilled,
  requestInterceptor.onRejected,
);
customAxios.interceptors.response.use(
  responseInterceptor.onFulfilled,
  responseInterceptor.onRejected,
);

export const GET = (option: AxiosRequestConfig<unknown>) =>
  customAxios.request({ ...option, method: "GET" }).then((res) => res.data);
export const POST = (option: AxiosRequestConfig<unknown>) =>
  customAxios.request({ ...option, method: "POST" }).then((res) => res.data);
export const DELETE = (option: AxiosRequestConfig<unknown>) =>
  customAxios.request({ ...option, method: "DELETE" }).then((res) => res.data);
export const PUT = (option: AxiosRequestConfig<unknown>) =>
  customAxios.request({ ...option, method: "PUT" }).then((res) => res.data);
export const PATCH = (option: AxiosRequestConfig<unknown>) =>
  customAxios.request({ ...option, method: "PATCH" }).then((res) => res.data);

export default customAxios;
