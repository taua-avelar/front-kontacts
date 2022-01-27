import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    push("/contatos");
  }, [pathname]);

  return <div></div>;
}
