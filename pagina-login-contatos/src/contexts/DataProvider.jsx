import { createContext } from "react";
import useDataprovider from "../hooks/useDataProvider";

export const ContextData = createContext({});

export default (props) => {
  const DataProvider = useDataprovider();
  return (
    <ContextData.Provider value={DataProvider}>
      {props.children}
    </ContextData.Provider>
  );
};
