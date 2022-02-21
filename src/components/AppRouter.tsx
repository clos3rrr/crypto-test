import React from "react";
import { Route, Routes } from "react-router-dom";
import InvalidPath from "../pages/404/InvalidPath";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={route.element} path={route.path} key={route.path} />
      ))}
      <Route element={<InvalidPath />} path="*" />
    </Routes>
  );
};

export default AppRouter;
