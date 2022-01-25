import { Box, Typography, Button } from "@mui/material";
import useData from "../../hooks/useData";

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

export default function DeleteContactModal({ setDeletingContact, deletingId }) {
  const { delContact } = useData();
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h5" component="h2">
        Confirma a exclusão?
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Deseja excluir o contato, contato?
      </Typography>
      <Button
        style={{ backgroundColor: "#04C45C" }}
        variant="contained"
        onClick={() => {
          delContact(deletingId);
          setDeletingContact(false);
        }}
      >
        Excluir
      </Button>
      <Button
        style={{ backgroundColor: "rgb(251, 6, 21, 0.65)" }}
        variant="contained"
        onClick={() => setDeletingContact(false)}
      >
        Cancelar
      </Button>
    </Box>
  );
}
