import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import { notificationApi } from "../../generic/notify";
import { useNavigate } from "react-router-dom";

export const  useLoginMutation = ()=> {
    const axios = useAxios();
    const notify = notificationApi();
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (data:object)=>
        axios({url: "api/auth/sign-in", body: data, method: "POST"}),
        onSuccess: (data) => {
         notify("login")
         navigate("/")
            console.log(data);
        },
        onError: (error:{ status: number}) => {
            let status = error.status || 400;
            if(status === 400){
                notify("login_error")
            }
        },
    });
};