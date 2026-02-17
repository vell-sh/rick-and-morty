import { createBrowserRouter } from "react-router";

import { CharacterItem, CharacterList } from "@pages";
import { Layout } from "@widgets";

const createRoutes = () => [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: CharacterList,
      },
      {
        path: "character",
        Component: CharacterItem,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(createRoutes());
