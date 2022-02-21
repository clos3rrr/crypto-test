import { ReactElement } from "react";
import Main from "../pages/Main/Main";
import Token from "../pages/Token/Token";

interface IRoute {
  path: string;
  element: ReactElement;
  exact: boolean;
}

export const routes: IRoute[] = [
  { path: "/", element: <Main />, exact: true },
  { path: "/token/:id", element: <Token />, exact: true },
];
