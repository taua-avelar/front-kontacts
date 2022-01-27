import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomizedToastify from "../../helpers/toastify/Toastify";
import useData from "../../hooks/useData";
import { userRegister } from "../../requests/userRegister";
import "./styles.css";

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

export default function RegisterForm() {
  const history = useHistory();
  const { usuarioLogado } = useData();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dadosCadastro, setDadosCadastro] = useState({});
  const [cadastrado, setCadastrado] = useState({});

  useEffect(async () => {
    dadosCadastro &&
      dadosCadastro.email &&
      setCadastrado(await userRegister(dadosCadastro));
  }, [dadosCadastro]);

  useEffect(() => {
    if (cadastrado && cadastrado.id) {
      CustomizedToastify("Sucesso ao cadastrar!");
      history.push("/login");
      return;
    }
  }, [cadastrado]);

  useEffect(() => {
    usuarioLogado && usuarioLogado.usuario && history.push("/contatos");
  }, [usuarioLogado]);

  return (
    <div className="container-form">
      <div className="register">
        <h1>Cadastre-se</h1>

        <TextField
          id="filled-basic"
          label="Nome"
          variant="outlined"
          required
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />

        <TextField
          id="filled-basic"
          label="Email"
          variant="outlined"
          required
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          id="filled-basic"
          label="Senha"
          variant="outlined"
          required
          type={"password"}
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#04C45C" }}
          onClick={() => {
            setDadosCadastro(() => handleRegister(nome, email, senha));
          }}
        >
          Cadastrar
        </Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "rgb(251, 6, 21, 0.65)" }}
          onClick={() => history.push("/login")}
        >
          Cancelar
        </Button>
      </div>
      <div className="redirect-login">
        <span>Já tem cadastro? </span>
        <a href="" onClick={() => history.push("/login")}>
          Clique Aqui
        </a>
      </div>
    </div>
  );
}
