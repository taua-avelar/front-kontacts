import CustomizedToastify from "../helpers/toastify/Toastify";
import useData from "../hooks/useData";

export const delContact = async (id, token, setChanged) => {
  try {
    const response = await fetch(
      `https://cubos-api-contacts.herokuapp.com/contatos/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    if (response.status === 200) {
      CustomizedToastify("Sucesso ao apagar!");
      setChanged(response);
      return;
    }
  } catch (error) {
    return CustomizedToastify(error.message);
  }
};
