import CustomizedToastify from "../helpers/toastify/Toastify";

export const userRegister = async (dados) => {
  try {
    const response = await fetch(
      "https://cubos-api-contacts.herokuapp.com/usuarios",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dados),
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return CustomizedToastify(error.message);
  }
};
