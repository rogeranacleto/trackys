import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./layout";
import { Cotacoes } from "./pages/Admin/Cotacoes";
import { Dashboard } from "./pages/Admin/Dashboard";
import { Ranking } from "./pages/Admin/Ranking";
import { Envios } from "./pages/Admin/Envios";
import { Indicadores } from "./pages/Admin/Indicadores";
import { Ocorrencias } from "./pages/Admin/Ocorrencias";
import { PrivateRoute } from "./components/PrivateRoute";

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
    element: <PrivateRoute/>,
    children:[
        {
        element: <Layout/>,
        children:[
          {
            element: <Dashboard/>,
            path: "/admin/dashboard"
          },
          {
            element: <Cotacoes/>,
            path: "/admin/cotacoes"
          },
          {
            element: <Envios/>,
            path: "/admin/envios"
          },
          {
            element: <Ranking/>,
            path: "/admin/ranking"
          },
          {
            element: <Indicadores/>,
            path: "/admin/indicadores"
          },
          {
            element: <Ocorrencias/>,
            path: "/admin/ocorrencias"
          }
        ]
      },
    ]
  },
  {
    element: <NotFound/>,
    path:"*"
  }
])

export { route }