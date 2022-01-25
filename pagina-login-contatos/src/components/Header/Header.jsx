import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useHistory } from "react-router-dom";
import useData from "../../hooks/useData.jsx";
import AppBar from "./styles";

export default function PersistentDrawerRight() {
  const { setUsuarioLogado, setDadosLogin } = useData();
  const history = useHistory();

  const handleLogout = () => {
    setDadosLogin({});
    setUsuarioLogado({});
    history.push("/login");
  };

  return (
    <Box sx={{ display: "flex", marginTop: "100px" }}>
      <AppBar sx={{ display: "flex", backgroundColor: "#134563" }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Kontacts
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleLogout}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
