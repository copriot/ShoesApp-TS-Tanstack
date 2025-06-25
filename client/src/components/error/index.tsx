import type { FC } from "react";

const Error: FC<{ error: string }> = ({ error }) => {
  return <div>{error}</div>;
};

export default Error;
