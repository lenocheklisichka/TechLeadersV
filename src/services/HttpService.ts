import axios, { AxiosRequestConfig } from "axios";
import cookies from "browser-cookies";

import { NetworkError } from "./NetworkError";

const createFormData = (data: any) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};

const successStatuses = [200, 201, 202];

class HttpService {
  public authenticator = cookies.get("token") || "";
  private headers = {
    Accept: "application/json",
  };

  public setAuthenticator(token: string) {
    this.authenticator = token || "";
  }

  public get = async <T>(url: string, params?: any, withToken = true): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
      },
      method: "GET",
      params,
      url,
    };

    if (withToken) {
      config.headers.Authorization = this.authenticator;
    }

    return this.makeRequest(config);
  }

  public delete = async <T>(url: string, withToken = true): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
      },
      method: "DELETE",
      url,
    };

    if (withToken) {
      config.headers.Authorization = this.authenticator;
    }

    return this.makeRequest(config);
  }

  public post = async <T>(
    url: string,
    data?: any,
    type?: string,
    withToken = true,
    headers?: any,
  ): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
        ...headers,
      },
      method: "POST",
      url,
    };

    if (withToken) {
      config.headers.Authorization = this.authenticator;
    }

    if (type === "file") {
      config.data = createFormData(data);
    } else {
      config.data = JSON.stringify(data);
      config.headers["Content-Type"] = "application/json";
    }

    return this.makeRequest(config);
  }

  public put = async <T>(url: string, data: any, type?: string, withToken = true): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: {
        ...this.headers,
      },
      method: "PUT",
      url,
    };

    if (withToken) {
      config.headers.Authorization = this.authenticator;
    }

    if (type === "file") {
      config.data = createFormData(data);
    } else {
      config.data = JSON.stringify(data);
      config.headers["Content-Type"] = "application/json";
    }

    return this.makeRequest(config);
  }

  private makeRequest = async (config: AxiosRequestConfig) => {
    try {
      const response = await axios(config);

      if (successStatuses.includes(response.status)) {
        return response.data;
      }

      throw new NetworkError(response);
    } catch (error) {

      throw error;
    }
  }
}

export { HttpService };
export default new HttpService();