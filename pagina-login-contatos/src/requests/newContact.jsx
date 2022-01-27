import CustomizedToastify from "../helpers/toastify/Toastify";

export const newContact = async (nome, email, telefone, token, setChanged) => {
  try {
    const response = await fetch(
      "https://cubos-api-contacts.herokuapp.com/contatos",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
        }),
      }
    );
    if (response.status === 200)
      return CustomizedToastify("Sucesso ao cadastrar!");
    setChanged(response);
  } catch (error) {
    return CustomizedToastify(error.message);
  }
};
