import { useState } from "react";

export default () => {
  const [dadosCadastro, setDadosCadastro] = useState({});
  const [dadosLogin, setDadosLogin] = useState({});
  const [usuarioLogado, setUsuarioLogado] = useState({});
  const [changed, setChanged] = useState();

  const handleRegister = (nome, email, senha) => {
    if (!nome) return console.log("nome obrigatorio");
    if (!email) return console.log("email obrigatorio");
    if (!senha) return console.log("senha obrigatoria");

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
      console.log(error);
    }
  };

  const handleLogin = (email, senha) => {
    if (!email) return console.log("email obrigatorio");
    if (!senha) return console.log("senha obrigatoria");

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
        return console.log("usuario ou senha incorretos");

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getContacts = async () => {
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
  };

  const newContact = async (nome, email, telefone) => {
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
    console.log(response.status);
    setChanged(response);
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
  };
};
