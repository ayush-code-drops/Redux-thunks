import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../redux/auth/action";

export function Login() {
  const { isAuth, isLoading, isError } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    // console.log("hi")
    e.preventDefault();
    const loginAction = login({ email, password });
    dispatch(loginAction);
  };
  if (isAuth) {
    return <Redirect to="/tasks" />;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (isError) {
    return (
      <div>
        Something went wrong
        <br />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
