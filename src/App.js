import { useEffect } from "react";
import useListContext from "./hooks/use-list-context";
import ListItemCreate from "./components/ListItemCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const { fetchListItems } = useListContext();

  useEffect(() => {
    fetchListItems();
  }, [fetchListItems]);

  return (
    <div className="flex items-center flex-col pt-12">
      <h1 className="text-2xl font-semibold">Today's Tasks</h1>
      <ToDoList />
      <ListItemCreate />
    </div>
  );
}

export default App;
