import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function CustomizedToastify(texto) {
  return Toastify({
    text: texto,

    duration: 3000,
  }).showToast();
}

export default CustomizedToastify;
