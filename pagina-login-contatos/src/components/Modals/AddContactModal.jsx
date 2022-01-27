import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { newContact } from "../../requests/newContact";
import useData from "../../hooks/useData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function AddContactModal({ setCreatingContact }) {
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const { usuarioLogado, setChanged } = useData();

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h5" component="h2">
        Novo Contato
      </Typography>

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
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <TextField
        id="filled-basic"
        label="Telefone"
        variant="outlined"
        required
        onChange={(e) => setTelefone(e.target.value)}
        value={telefone}
      />

      <Button
        style={{ backgroundColor: "#04C45C" }}
        variant="contained"
        onClick={() => {
          newContact(nome, email, telefone, usuarioLogado.token, setChanged);
          setCreatingContact(false);
          history.push("/login");
        }}
      >
        Adicionar
      </Button>

      <Button
        style={{ backgroundColor: "rgb(251, 6, 21, 0.65)" }}
        variant="contained"
        onClick={() => setCreatingContact(false)}
      >
        Cancelar
      </Button>
    </Box>
  );
}
