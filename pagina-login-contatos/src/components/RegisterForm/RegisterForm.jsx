import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useData from "../../hooks/useData";
import "./styles.css";

export default function RegisterForm() {
  const history = useHistory();
  const { setDadosCadastro, dadosCadastro, handleRegister, userRegister } =
    useData();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cadastrado, setCadastrado] = useState({});

  useEffect(async () => {
    dadosCadastro &&
      dadosCadastro.email &&
      setCadastrado(await userRegister(dadosCadastro));
  }, [dadosCadastro]);

  useEffect(() => {
    cadastrado && cadastrado.id
      ? history.push("/login")
      : console.log(cadastrado);
  }, [cadastrado]);
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
          onClick={() =>
            setDadosCadastro(() => handleRegister(nome, email, senha))
          }
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
