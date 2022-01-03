import { Link, Route,Switch } from "react-router-dom";
import { Login } from "../components/Login";
import { Tasks } from "../pages/Tasks";

 function AllRoutes() {
  return (
    <>
      <div>
        <Link to="/">Login</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
<Switch>
     <Route exact path="/">
<Login/>
     </Route>
     
     <Route exact path="/tasks">
<Tasks/>
     </Route>
     
     <Route >
       <div>err</div>
     </Route>
</Switch>

    </>
  );
}

export {AllRoutes}
