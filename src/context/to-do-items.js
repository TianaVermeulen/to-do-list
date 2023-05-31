import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ListContext = createContext();

function Provider({ children }) {
  const [toDoList, setToDoList] = useState([]);

  const fetchListItems = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/toDoListItems");

    setToDoList(response.data);
  }, []);

  const createListItem = async (task) => {
    const response = await axios.post("http://localhost:3001/toDoListItems", {
      description: task,
      completed: false,
    });

    const updatedList = [...toDoList, response.data];

    setToDoList(updatedList);
  };

  const editListItemById = async (id, newTask) => {
    const response = await axios.put(
      `http://localhost:3001/toDoListItems/${id}`,
      {
        description: newTask.description,
        completed: newTask.completed,
      }
    );

    const updatedList = toDoList.map((task) => {
      if (task.id === id) {
        return { ...toDoList, ...response.data };
      }

      return task;
    });
    setToDoList(updatedList);
  };

  const deleteListItemById = async (id) => {
    await axios.delete(`http://localhost:3001/toDoListItems/${id}`);

    const updatedList = toDoList.filter((task) => {
      return task.id !== id;
    });
    setToDoList(updatedList);
  };

  //   //   This is used to share f's with other components
  const valueToShare = {
    toDoList,
    fetchListItems,
    createListItem,
    editListItemById,
    deleteListItemById,
  };

  return (
    <ListContext.Provider value={valueToShare}>
    {children}
    </ListContext.Provider>
  );
}

export { Provider };
export default ListContext;

// import BooksContext, {Provider} from "../context/books";
