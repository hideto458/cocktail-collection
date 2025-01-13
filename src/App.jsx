import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import AppLayout from "./Pages/AppLayout";
import { DrinkProvider } from "./contexts/DrinkContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/favorites/:id", element: <Favorites /> },
    ],
  },
]);

export default function App() {
  return (
    <DrinkProvider>
      <RouterProvider router={router} />
    </DrinkProvider>
  );
}
