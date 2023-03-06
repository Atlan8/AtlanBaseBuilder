import axios from "axios";
import { ElMessageBox, ElMessage } from "element-plus";
import { useGlobSetting } from "@/hooks/setting/useGlobSetting";

const { apiUrl } = useGlobSetting();

const service = axios.create({
  baseURL: apiUrl, // url = base url + request url
  timeout: 20000, // request timeout
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    console.log(res);
    if (!Reflect.has(res, "errorCode")) {
      return {
        errorCode: 0,
        msg: "",
        data: res,
      };
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.errorCode !== 0) {
      ElMessage.error({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (
        res.errorCode === 50008 ||
        res.errorCode === 50012 ||
        res.errorCode === 50014
      ) {
        // to re-login
        ElMessageBox.confirm(
          "You have been logged out, you can cancel to stay on this page, or log in again",
          "Confirm logout",
          {
            confirmButtonText: "Re-Login",
            cancelButtonText: "Cancel",
            type: "warning",
          }
        ).then(() => {
          // store.dispatch("user/resetToken").then(() => {
          //   location.reload();
          // });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
