import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NotFound from "pages/Error";
import Layout from "layouts/Layout";
import Home from "pages/HomePage";
import ViewDetails from "pages/ViewDetails"
import Error from "pages/Error"


function MainRoute() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/details",
          element: <ViewDetails/>,
        },
      ],
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);
  return(
    <RouterProvider router={routes} />
  )
}

export default MainRoute;
