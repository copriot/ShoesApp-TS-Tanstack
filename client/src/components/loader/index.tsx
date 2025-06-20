import type { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  );
};

export default Loader;
