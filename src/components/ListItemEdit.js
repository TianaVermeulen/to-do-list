import { useState } from "react";
import { HiOutlineCheck } from "react-icons/hi2";
import useListContext from "../hooks/use-list-context";
import Button from "./Button";

function ListItemEdit({ task, onSubmit }) {
  const [taskEdit, setTaskEdit] = useState(task);
  const { editListItemById } = useListContext();

  const handleChange = (event) => {
    setTaskEdit({
      ...taskEdit,
      description: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editListItemById(task.id, taskEdit);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap grow items-center">
        <textarea
          value={taskEdit.description}
          onChange={handleChange}
          autoFocus
          rows="1"
          className="input-bar mx-1 p-2.5 grow rounded-lg border"
        />
      <Button rounded plain className="add-button inline-flex">
        <HiOutlineCheck className="text-white" />
      </Button>
    </form>
  );
}

export default ListItemEdit;
