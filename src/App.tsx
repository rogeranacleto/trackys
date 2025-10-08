import { createBrowserRouter } from "react-router";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
const route = createBrowserRouter([
  {
    element: <Home/>,
    path: "/"
  },
  {
    element: <Login/>,
    path:"/login"
  },
  {
    element: <Signup/>,
    path:"/signup"
  }
])

export { route }