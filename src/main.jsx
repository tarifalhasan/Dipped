import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// sweiper style
import "swiper/css/bundle";
import { About, Blog, Contact, Services } from "./component";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
