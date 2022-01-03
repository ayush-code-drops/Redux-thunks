import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks, toggleTask } from "../redux/todos/action";

export function ToDoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const todos = useSelector((state) => state.app.todos);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };
  //console.log(todos);
  return (
    <div>
      {todos
        ?.filter((item) => item.title !== undefined)
        .map((item) => {
          return (
            <div key={item.id}>
              {`${item.title} - ${item.status}`}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleToggle(item.id)}>Toggle</button>
            </div>
          );
        })}
    </div>
  );
}
