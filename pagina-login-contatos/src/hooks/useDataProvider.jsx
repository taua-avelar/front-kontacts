import { useState } from "react";
import CustomizedToastify from "../components/toastify/Toastify";

export default () => {
  const [dadosCadastro, setDadosCadastro] = useState({});
  const [dadosLogin, setDadosLogin] = useState({});
  const [usuarioLogado, setUsuarioLogado] = useState({});
  const [changed, setChanged] = useState();
  const [editingContact, setEditingContact] = useState(false);
  const [contactInEditing, setContactInEditing] = useState({});

  const handleRegister = (nome, email, senha) => {
    if (!nome) return CustomizedToastify("Preencha o campo nome!");
    if (!email) return CustomizedToastify("Preencha o campo email!");
    if (!senha) return CustomizedToastify("Preencha o campo senha!");

    return {
      nome: nome,
      email: email,
      senha: senha,
    };
  };

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

  const handleLogin = (email, senha) => {
    if (!email) return CustomizedToastify("Preencha o campo email!");
    if (!senha) return CustomizedToastify("Preencha o campo senha!");

    return {
      email: email,
      senha: senha,
    };
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
    dadosCadastro,
    setDadosCadastro,
    dadosLogin,
    setDadosLogin,
    usuarioLogado,
    setUsuarioLogado,
    handleRegister,
    userRegister,
    handleLogin,
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
  };
};
