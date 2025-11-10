import { useNavigate } from "react-router-dom";
import { useAxios } from "../../useAxios/index";
import { useMutation } from "@tanstack/react-query";
import type { LoginData } from "../../../types";
import { notificationApi } from "../../../generic/notify";

export const useLoginMutation = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const notify = notificationApi();
  return useMutation({
    mutationFn: (data: LoginData) =>
      axios({
        url: "api/auth/sign-in",
        method: "POST",
        body: { ...data }, //
      }),
    onSuccess: (response) => {
      const token = response?.token;
     
      
      notify("login");

      if (token) {
        localStorage.setItem("token", token);
      }
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    },
    onError: (error: { status: number }) => {
      const status = error.status || 400;
      if (status === 400) notify("login_encorrect");
    },
  });
};