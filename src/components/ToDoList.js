import useListContext from "../hooks/use-list-context";
import ListItemView from "./ListItemView";

function ToDoList() {
  const { toDoList } = useListContext();

  const sortTasks = (taskA, taskB) => {
    return taskA.completed < taskB.completed ? -1 : 0;
  };

  const renderedToDoList = toDoList.sort(sortTasks).map((task) => {
    return <ListItemView key={task.id} task={task} />;
  });

  return (
    <div className="w-auto flex flex-col">
      <ul>{renderedToDoList}</ul>
    </div>
  );
}

export default ToDoList;
