import { createRoot } from "react-dom/client";
import App from "./pages/App/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FavoritesPages from "./pages/FavoritesPages/FavoritesPages.tsx"
import UsersPage from "./pages/UsersPage/UsersPage.tsx";
import React from "react";
import "./index.css";

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

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
