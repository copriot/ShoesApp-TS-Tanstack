import type { FC } from "react";
import type { Product } from "../../types";

interface Props {
  item: Product;
  designs?: string;
}

const Price: FC<Props> = ({ item, designs }) => {
  let price = item.price;

  if (item.discount) {
    price = (item.price * (100 - item.discount)) / 100;
  }

  return (
    <div className={`${item.discount ? "text-my-yellow" : "text-my-faWhite"} ${designs}`}>
      $ {price.toFixed(2)}
    </div>
  );
};

export default Price;
