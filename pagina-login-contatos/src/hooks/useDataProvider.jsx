import { useState } from "react";
import { useLocalStorage } from "react-use";

export default function Provider() {
  const [usuarioLogado, setUsuarioLogado, removeUsuarioLogado] =
    useLocalStorage("token", "");
  const [changed, setChanged] = useState();
  const [editingContact, setEditingContact] = useState(false);
  const [contactInEditing, setContactInEditing] = useState({});

  return {
    usuarioLogado,
    setUsuarioLogado,
    changed,
    setChanged,
    editingContact,
    setEditingContact,
    setContactInEditing,
    contactInEditing,
    removeUsuarioLogado,
  };
}
