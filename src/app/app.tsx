import { RouterProvider } from "react-router";

import { AppRouter } from "./app-router";

export const App = () => {
  return <RouterProvider router={AppRouter} />;
};
