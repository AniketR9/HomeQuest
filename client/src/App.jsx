import HomePage from "./routes/homepage/homepage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import {Layout, RequireAuth} from "../src/routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "../src/routes/login/login";
import Profile from "../src/routes/profilePage/profilePage";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";

function App() {

  const router=createBrowserRouter([
    {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<HomePage />
      },
      {
        path:"/list",
        element:<ListPage />
      },
      {
        path:"/:id",
        element:<SinglePage />
      },
      
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  },
  {
    path:"/",
    element:<RequireAuth />,
    children:[
      {
        path:"/profile",
        element:<Profile />
      },
      {
        path:"/profile/update",
        element:<ProfileUpdatePage />
      },
    ]
  }
  ]);
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;
