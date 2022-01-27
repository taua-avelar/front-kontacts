import { useState } from "react";
import { useLocalStorage } from "react-use";
import CustomizedToastify from "../helpers/toastify/Toastify";

export default function Provider() {
  const [usuarioLogado, setUsuarioLogado, removeUsuarioLogado] =
    useLocalStorage("token", "");
  const [changed, setChanged] = useState();
  const [editingContact, setEditingContact] = useState(false);
  const [contactInEditing, setContactInEditing] = useState({});

  const userRegister = async (dados) => {
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

  const userLogin = async (dados) => {
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

  const getContacts = async () => {
    try {
      const response = await fetch(
        "https://cubos-api-contacts.herokuapp.com/contatos",
        {
          method: "GET",
          headers: {
            Authorization: usuarioLogado.token,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return CustomizedToastify(error.message);
    }
  };

  const newContact = async (nome, email, telefone) => {
    try {
      const response = await fetch(
        "https://cubos-api-contacts.herokuapp.com/contatos",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: usuarioLogado.token,
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

  const delContact = async (id) => {
    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/contatos/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: usuarioLogado.token,
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

  const editContact = async (id, nome, email, telefone) => {
    try {
      const result = await fetch(
        `https://cubos-api-contacts.herokuapp.com/contatos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: usuarioLogado.token,
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

  return {
    usuarioLogado,
    setUsuarioLogado,
    userRegister,
    userLogin,
    getContacts,
    newContact,
    changed,
    delContact,
    editContact,
    editingContact,
    setEditingContact,
    setContactInEditing,
    contactInEditing,
    removeUsuarioLogado,
  };
}
