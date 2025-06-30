import { useState, type FC } from "react";
import type { Product } from "../../types";
import { colors as colorsList } from "../../utils/constants";
interface Props {
  colors: string;
}

const Color: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState<string>("");
  const toggle = (id: string) => setSelected(selected === id ? "" : id);

  //console.log(colors);
  //stringi , e göre ayır ve diziye çevir
  //console.log(colors.split(","));
  return (
    <div>
      <h2 className="font-semibold mb-3">Choose a color</h2>
      <div className="flex gap-5">
        {colors.split(",").map((id) => {
          const color = colorsList.find((i) => i.id == id);
          const isSelected = selected === id;
          return (
            <div
              key={id}
              className={selected === id ? "ring-3 ring-my-blue rounded-full" : ""}
            >
              <div
                onClick={() => toggle(id)}
                className="m-1 size-9 rounded-full cursor-pointer"
                style={{ background: color?.code }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
