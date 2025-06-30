import type { FC } from "react";
import type { Product } from "../../types";
import Badge from "./badge";
import { Link } from "react-router-dom";
import Price from "./price";

const Card: FC<{ shoe: Product }> = ({ shoe }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="relative">
        <div className="p-2 bg-my-faWhite rounded-2xl xl:rounded-3xl w-full">
          <div className="absolute">
            <Badge item={shoe} />
          </div>
          <img
            src={shoe.picture[0]}
            alt={shoe.name}
            className="rounded-12px xl:rounded-3xl w-full h-full object-cover"
          />
        </div>
        <h2 className="xl:text-[24px] lg:text-[20px] font-semibold line-clamp-2 my-4">
          {shoe.name}
        </h2>
      </div>
      <Link
        to={`/shoe/${shoe._id}`}
        className="text-my-faWhite bg-my-grayDark flex items-center justify-center font-medium px-4 py-2 rounded-[8px] transition hover:bg-my-grayDark/90 max-sm:font-light max-lg:text-sm"
      >
        VIEW PRODUCT - &nbsp;
        <Price item={shoe} />
      </Link>
    </div>
  );
};

export default Card;
