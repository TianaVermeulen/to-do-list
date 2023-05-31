import { useState } from "react";
import { HiXMark, HiOutlinePencil } from "react-icons/hi2";
import useListContext from "../hooks/use-list-context";
import classNames from "classnames";

import Button from "./Button";
import ListItemEdit from "./ListItemEdit";
import Panel from "./Panel";

function ListShow({ task }) {
  const [taskEdit, setTaskEdit] = useState(false);
  const { deleteListItemById, editListItemById } = useListContext();

  const handleDeleteClick = () => {
    deleteListItemById(task.id);
  };

  const handleEditClick = () => {
    setTaskEdit(!taskEdit);
  };

  const handleSubmit = () => {
    setTaskEdit(false);
  };

  const onChecked = (event) => {
    editListItemById(task.id, {
      ...task,
      completed: event.target.checked,
    });
  };

  //   Toggle from display
  let listItem = <p className={classNames('w-72 px-4', {
    'line-through': task.completed,
    })}>{task.description}</p>;
  if (taskEdit) {
    listItem = <ListItemEdit className="w-72" onSubmit={handleSubmit} task={task} />;
  }
  //

  return (
    <Panel className="panel rounded-lg flex flex-row items-center mb-2">
      <div>
        <input type="checkbox" checked={task.completed} onChange={onChecked} />
      </div>
      {listItem}
      <div className="inline-block flex">
        <Button rounded plain className="task-button ml-1" onClick={handleEditClick}>
          <HiOutlinePencil />
        </Button>
        <Button rounded className="task-button ml-1" onClick={handleDeleteClick}>
          <HiXMark />
        </Button>
      </div>
    </Panel>
  );
}

export default ListShow;
