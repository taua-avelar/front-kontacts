import Header from "../components/Header/Header.jsx";
import Table from "../components/Tables/Table";
import DeleteContactModal from "../components/Modals/DeleteContactModal";
import AddContactModal from "../components/Modals/AddContactModal";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Contacts() {
  const [creatingContact, setCreatingContact] = useState(false);
  const [deletingContact, setDeletingContact] = useState(false);

  return (
    <>
      <div
        style={{
          margin: "150px 150px 0",
          display: "flex",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            <Button
              style={{ backgroundColor: "#04C45C" }}
              variant="contained"
              onClick={() => setCreatingContact(true)}
            >
              Adicionar
            </Button>
          </div>
          <Table />
        </div>
      </div>
      {deletingContact && <DeleteContactModal />}
      {creatingContact && (
        <AddContactModal setCreatingContact={setCreatingContact} />
      )}
    </>
  );
}
