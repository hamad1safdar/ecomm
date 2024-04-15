import type { FC, ReactNode } from "react";

import "./styles.css";

const Grid: FC<{ children: ReactNode }> = (props) => {
  return <div className="product-grid">{props.children}</div>;
};

export const Item: FC<{ children: ReactNode }> = (props) => {
  return <div className="grid-item">{props.children}</div>;
};

export default Grid;
