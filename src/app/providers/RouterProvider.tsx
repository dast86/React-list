import App from "../../pages/App/App.tsx";
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";
import UsersPage from "../../pages/UsersPage/UsersPage.tsx";
import FavoritesPages from "../../pages/FavoritesPages/FavoritesPages.tsx";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", // Пустой путь делает этот маршрут активным по умолчанию
        element: <UsersPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPages />,
      },
    ],
  },
]);

const RouterProvider: React.FC = () => (
  <ReactRouterProvider router={router}/> 
);


export default RouterProvider