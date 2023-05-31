import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import Button from "./Button";
import useListContext from "../hooks/use-list-context";

function ListItemCreate() {
  const [createTask, setCreateTask] = useState("");
  const { createListItem } = useListContext();

  const handleChange = (event) => {
    setCreateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createListItem(createTask);
    setCreateTask("");
  };

  return (
    <div className="footer">
      <h2 className="flex items-center flex-col">Add a task</h2>
      <form className="footer-content" onSubmit={handleSubmit}>
        <input
          className="input-bar ml-2"
          placeholder="New task"
          value={createTask}
          onChange={handleChange}
          required
        />
        <Button
          rounded
          className="add-button ml-2 text-xl h-10 w-10 inline-flex"
        >
          <HiPlus />
        </Button>
      </form>
    </div>
  );
}

export default ListItemCreate;
