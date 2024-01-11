import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import { BrowserRouter as Router, RouterProvider, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

const App =() => {
  return (
<Router>
  <Navbar />
  <Switch>

  <Route exact path = "/" component={Home}/>
  <Route path="/Login" component={Login}/>
  <Route path="/Register" component={Register}/>
  </Switch>
  </Router>
  );
}

export default App;


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
