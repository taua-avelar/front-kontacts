import { Box, Typography, Button } from "@mui/material";
import useData from "../../hooks/useData";
import { useState } from "react";
import { TextField } from "@mui/material";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditingContactModal({ editingId }) {
  const { setEditingContact, contactInEditing, editContact } = useData();

  const [nome, setNome] = useState(contactInEditing.nome);
  const [email, setEmail] = useState(contactInEditing.email);
  const [telefone, setTelefone] = useState(contactInEditing.telefone);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h5" component="h2">
        Editar Contato
      </Typography>

      <TextField
        id="filled-basic"
        label="Nome"
        variant="outlined"
        onChange={(e) => setNome(e.target.value)}
        value={nome}
      />

      <TextField
        id="filled-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <TextField
        id="filled-basic"
        label="Telefone"
        variant="outlined"
        onChange={(e) => setTelefone(e.target.value)}
        value={telefone}
      />

      <Button
        style={{ backgroundColor: "#04C45C" }}
        variant="contained"
        onClick={() => {
          setEditingContact(false);
          editContact(editingId, nome, email, telefone);
        }}
      >
        Confirmar
      </Button>
      <Button
        style={{ backgroundColor: "rgb(251, 6, 21, 0.65)" }}
        variant="contained"
        onClick={() => setEditingContact(false)}
      >
        Cancelar
      </Button>
    </Box>
  );
}
