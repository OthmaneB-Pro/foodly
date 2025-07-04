import { toast } from "react-toastify";

export const toastNotification = () =>
  toast.info("Mode admin activé", {
    theme: "dark",
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
