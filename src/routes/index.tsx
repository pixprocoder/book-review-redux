import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Books from "../pages/books/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/book",
        element: <Books />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
