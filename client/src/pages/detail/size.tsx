import { useState, type FC } from "react";
import type { Product } from "../../types";
import { numbers } from "../../utils/constants";

interface Props {
  size: string;
}

const Size: FC<Props> = ({ size }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const toggle = (num: string) => {
    setSelectedSize(selectedSize === num ? "" : num);
  };

  return (
    <div>
      <h2>Choose a size</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {
          //ekrana basılan numaraların size içinde olup olmadığını kontrol ediyoruz.
          const inStock = size.split(",").includes(num.toString());

          // ekrana basılan numaraların seçili olup olmadığını kontrol ediyoruz.
          const isSelected = selectedSize === num;

          return (
            <button
              key={num}
              onClick={() => toggle(num)}
              disabled={!inStock}
              className={`py-2 px-4 lg:px-0 cursor-pointer rounded-md transition hover:bg-zinc-400 disabled:bg-[#d1d2d3] disabled:cursor-not-allowed disabled:text-[#8f8c91] ${
                isSelected ? "bg-my-grayDark text-my-faWhite" : "bg-my-faWhite"
              } `}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
