import type { FC } from "react";
import type { Product } from "../../types";

const Badge: FC<{ item: Product }> = ({ item }) => {
  if (!item.discount && !item.isNew) return null;

  return (
    <span
      className={`top-2 left-2 text-my-faWhite rounded rounded-tl-2xl rounded-br-2xl p-1 max-w-[110px]  ${
        item.discount ? "bg-my-yellow" : "bg-my-blue"
      }`}
    >
      {item.discount ? `${item.discount.toString().replace("-", "")}% Discount` : "New"}
    </span>
  );
};

export default Badge;
