import { CharacterItem, CharacterList } from "@pages";
import { createBrowserRouter } from "react-router";
import { Layout } from "widgets";

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
