import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// sweiper style
import "swiper/css/bundle";
import {
  About,
  Blog,
  Contact,
  PageNotFound,
  Quotes,
  Services,
  WheelRepair,
  WindowTinting,
} from "./component";

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
        path: "services/quotes",
        element: <Quotes />,
      },
      {
        path: "services/window_tinting",
        element: <WindowTinting />,
      },
      {
        path: "/services/wheel_repair",
        element: <WheelRepair />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "*", element: <PageNotFound /> },
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
