import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
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