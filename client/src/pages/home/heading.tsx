import type { FC } from "react";

const Heading: FC = () => {
  return (
    <div className="max-md:my-[24px] md:mt-[48px] xl:mt-[90px] max-md:mb-[24px] md:mb-[32px] flex items-center justify-between relative">
      <div className="">
        <h1 className="font-semibold text-my-grayDark xl:text-[74px] sm:text-[24px] md:text-[40px] lg:text-[56px] md:uppercase w-[65%] max-md:w-[100%] max-md:line-clamp-1 leading-[96%]  md:line-clamp-2">
          Don't miss out on new drops
        </h1>
      </div>

      <div className="md:absolute md:right-0 md:bottom-0">
        <button className="bg-my-blue text-[14px] text-white py-[12px] px-[16px] lg:px-[32px] rounded-[8px] hover:brightness-90 transition cursor-pointer whitespace-nowrap ">
          SHOP NEW DROPS
        </button>
      </div>
    </div>
  );
};

export default Heading;
