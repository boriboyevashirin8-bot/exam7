import toast from "react-hot-toast"

type NotifType = "login" | "login_error";


export const  notificationApi = () =>{
    const notify = (type: NotifType)=>{
        switch (type){
            case "login":
            return toast.success("Siz tizimga kirdingiz ! ");

            case "login_error":
            return toast.error("Email or password wrong ! ");
        }
    };


        return notify;
    
};