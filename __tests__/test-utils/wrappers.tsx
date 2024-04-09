import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterWrapper: FC<{ children: ReactNode | Array<ReactNode> }> = ({
  children,
}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
