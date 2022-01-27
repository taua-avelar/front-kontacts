import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import useData from "./hooks/useData";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/404";

function ProtectedRoutes(props) {
  const { usuarioLogado } = useData();
  return (
    <Route
      render={() =>
        usuarioLogado.token ? props.children : <Redirect to={"/login"} />
      }
    />
  );
}

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Register} path={"/cadastrar"} exact />
        <Route component={Login} path={"/login"} exact />
        <ProtectedRoutes>
          <Route component={NotFound} path={"/"} />
          <Route component={Contacts} path={"/contatos"} />
        </ProtectedRoutes>
      </Switch>
    </Router>
  );
}
