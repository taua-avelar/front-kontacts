import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import useData from "../../hooks/useData";
import AddContactModal from "../Modals/AddContactModal";
import DeleteContactModal from "../Modals/DeleteContactModal";
import EditingContactModal from "../Modals/EditingContactModal";
import { StyledTableCell, StyledTableRow } from "./styles";

export default function CustomizedTables({
  setCreatingContact,
  setDeletingContact,
  deletingContact,
  creatingContact,
}) {
  const [contacts, setContacts] = React.useState();
  const [deletingId, setDeletingId] = React.useState();
  const [editingId, setEditingId] = React.useState();
  const {
    getContacts,
    changed,
    editingContact,
    setEditingContact,
    setContactInEditing,
  } = useData();

  React.useEffect(async () => {
    setContacts(await getContacts());
  }, [changed]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TableContainer component={Paper} sx={{ width: "80vw" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Telefone</StyledTableCell>
              <StyledTableCell align="left">&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts &&
              contacts.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.nome}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">{row.telefone}</StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton
                      onClick={() => {
                        setContactInEditing(row);
                        setEditingContact(true);
                        setEditingId(row.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setDeletingContact(true);
                        setDeletingId(row.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {deletingContact && (
        <DeleteContactModal
          setDeletingContact={setDeletingContact}
          deletingId={deletingId}
        />
      )}
      {creatingContact && (
        <AddContactModal setCreatingContact={setCreatingContact} />
      )}

      {editingContact && <EditingContactModal editingId={editingId} />}
    </div>
  );
}
