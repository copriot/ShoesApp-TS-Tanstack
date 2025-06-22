import { type FC } from "react";
import Hero from "./hero";
import Buttons from "./buttons";
import List from "./list";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Buttons />

      <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold mb-4 md:mt-[28px] lg:mt-[32px]">
        Sana Uygun Seçenekler
      </h1>

      <List />
    </div>
  );
};

export default Home;
