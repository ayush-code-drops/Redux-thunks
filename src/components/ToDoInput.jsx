import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/todos/action";
//import { v4 as uuid } from "uuid";
import { store } from "../store";
export function ToDoInput() {
  console.log(store.getState());
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.app.todos);
  const [title, setTitle] = useState("");
  const handleAdd = () => {
    const payload = {
      title,
      status: false
      // id: uuid()
    };
    dispatch(addTask(payload));
    console.log(todos);
  };

  const { isLoading, isError } = useSelector((state) => state.app);
  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add something"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
