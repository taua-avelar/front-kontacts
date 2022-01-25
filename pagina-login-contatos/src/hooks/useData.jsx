import { useContext } from "react";
import { ContextData } from "../contexts/DataProvider";

export default () => {
  return useContext(ContextData);
};
