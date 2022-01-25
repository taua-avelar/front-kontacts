import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import DataProvider from "./contexts/DataProvider";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useData from "./hooks/useData";

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
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route component={Register} path={"/cadastrar"} exact />
            <Route component={Login} path={"/login"} exact />
            <ProtectedRoutes>
              <Route component={Contacts} path={"/contatos"} exact />
            </ProtectedRoutes>
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
