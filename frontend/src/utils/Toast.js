import { toast } from "react-hot-toast";

export const Toast = (type, message)=>{
   switch (type) {
        case "success":
          return toast.success(message);
   
            break;
    
        case "error":
            return toast.error(message)
            break;
    }
}