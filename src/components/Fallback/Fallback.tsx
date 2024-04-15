import { Spin } from "antd";

import type { FC } from "react";

const Fallback: FC = () => {
  return (
    <div className="centered-content">
      <Spin size="large" />
    </div>
  );
};

export default Fallback;
