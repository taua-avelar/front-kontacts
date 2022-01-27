import Routes from "./Routes";
import "./App.css";
import DataProvider from "./contexts/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Routes />
      </div>
    </DataProvider>
  );
}

export default App;
