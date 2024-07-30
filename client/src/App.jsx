import HomePage from "./routes/homepage/homepage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import {Layout, RequireAuth} from "../src/routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "../src/routes/login/login";
import Profile from "../src/routes/profilePage/profilePage";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

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
        element:<ListPage />,
        loader:listPageLoader
      },
      {
        path:"/:id",
        element:<SinglePage />,
        loader:singlePageLoader
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
        element:<Profile />,
        loader:profilePageLoader
      },
      {
        path:"/profile/update",
        element:<ProfileUpdatePage />
      },
      {
        path:"/add",
        element:<NewPostPage />
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
