import CustomizedToastify from "../helpers/toastify/Toastify";

export const userLogin = async (dados) => {
  try {
    const response = await fetch(
      "https://cubos-api-contacts.herokuapp.com/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dados),
      }
    );
    if (response.status !== 200)
      return CustomizedToastify("Email ou senha incorretos!");

    const data = await response.json();

    return data;
  } catch (error) {
    return CustomizedToastify(error.message);
  }
};
