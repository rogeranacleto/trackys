import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

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
  },
  {
    element: <NotFound/>,
    path:"*"
  }
])

export { route }