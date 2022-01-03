import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ToDoInput } from "../components/ToDoInput";
import { ToDoList } from "../components/ToDoList";

export function Tasks() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}
