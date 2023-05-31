import { useContext } from "react";
import ListContext from "../context/to-do-items";

function useListContext() {
  return useContext(ListContext);
}

export default useListContext;