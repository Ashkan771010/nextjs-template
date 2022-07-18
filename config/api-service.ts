import axios from "axios";
import { ApiConfig } from "./constant";
import Cookies from "js-cookie";
import Router from "next/router";

/*const handleToken = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("access_token")) {
      return `Bearer ${localStorage.getItem("access_token")}`;
    } else {
      return "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjA5MTk0MDQwNDg4IiwidXNlcklkIjoiZmZhNDBhNmUtZDcwZC00NjRhLThkN2EtZDlkNTM5ZTE4Mjc1In0.SINFVTo1RZThiuh4lEiBWswjI6rAZxq8_HA0_mfNt8o";
    }
  }
  return "";
};*/

const HttpService = axios.create({
  baseURL: ApiConfig.baseUrl + ApiConfig.prefix,
  withCredentials: true,
  headers: {
    // authorization: handleToken(),
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    crossDomain: "true",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    lang: "en",
    ClientId: "panel.admin",
  },
});

HttpService.interceptors.request.use(
  (config) => {
    const { headers } = config;

    if (typeof window !== "undefined" && window?.localStorage) {
      // const token = localStorage.getItem("access_token_loan_sim");
      const token = Cookies.get("token");
      if (headers && token) {
        headers.Authorization = `${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HttpService.interceptors.response.use(
  async function (r) {
    if (r && r.data) {
      const d = r.data;
      if (d.status && d.status === 401) {
        if (typeof window !== "undefined" && window?.localStorage) {
          localStorage.clear();
          // window.location.pathname = "/login";
        }
        Cookies.remove("token");
        // Router.push('/login')
        return Promise.reject(r);
      }

      if (typeof d.success !== "undefined" && d.success === false) {
        return Promise.reject(r);
      }
    }
    return r;
  },
  // eslint-disable-next-line func-names
  async function (error) {
    if (!error || !error.response) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default HttpService;
