import axios from "axios";
import { useNavigate } from "react-router-dom";

interface RequestType {
  method?: "GET" | "DELETE" | "PUT" | "POST" | "PATCH";
  body?: object;
  url: string;
  params?: object;
  headers?: object;
}

export const useAxios = () => {
  const navigate = useNavigate();
  const request = async ({
    method = "GET",
    url,
    params,
    headers,
    body,
  }: RequestType) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_BASE_URL}/${url}`,
        method,
        data: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ...headers,
        },
        params: {
          ...params,
        },
      });
      return response.data.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");

          navigate("/login");

          return;
        } else if (status === 400) {
          throw error;
        }
      }
    }
  };
  return request;
};