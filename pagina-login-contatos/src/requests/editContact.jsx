import CustomizedToastify from "../helpers/toastify/Toastify";

export const editContact = async (
  id,
  nome,
  email,
  telefone,
  token,
  setChanged
) => {
  try {
    const result = await fetch(
      `https://cubos-api-contacts.herokuapp.com/contatos/${id}`,
      {
        method: "PUT",
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

    if (result.status === 200) {
      CustomizedToastify("Sucesso ao editar!");
      setChanged(result);
      return;
    }
  } catch (error) {
    return CustomizedToastify(error.message);
  }
};
