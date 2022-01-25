import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import useData from "../../hooks/useData";
import { StyledTableCell, StyledTableRow } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function CustomizedTables() {
  const [contacts, setContacts] = React.useState();
  const { getContacts, changed } = useData();

  React.useEffect(async () => {
    setContacts(await getContacts());
    console.log("a");
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
                    <IconButton>
                      <EditIcon />
                    </IconButton>{" "}
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>{" "}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
