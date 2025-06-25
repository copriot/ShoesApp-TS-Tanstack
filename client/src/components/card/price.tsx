import type { FC } from "react";
import type { Product } from "../../types";

const Price: FC<{ item: Product }> = ({ item }) => {
  let price = item.price;

  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }

  return (
    <div className={`${item.discount ? "text-my-yellow" : "text-my-faWhite"}`}>
      $ {price.toFixed(2)}
    </div>
  );
};

export default Price;
