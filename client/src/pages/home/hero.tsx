import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative max-md:mt-[24px] md:mt-[80px] ">
      <div className="absolute flex h-[100%] w-[100%] flex-col justify-end text-my-gray p-4 sm:p-6 md:p-8 xl:p-10 md:justify-center">
        <p className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] xl:font-semibold text-my-faGray pt-2">
          Limited time only
        </p>
        <h1 className="max-md:pb-[4px] font-semibold max-md:text-[20px] md:text-[54px] xl:text-[74px] text-my-gray">
          Get 30% off
        </h1>
        <p className="font-open-sans max-md:text-[10px] md:text-[20px] text-my-gray max-w-[65%]">
          Sneakers made with your comfort in mind so you can put all of your focus into
          your next session.
        </p>
      </div>
      <img src="/banner.png" alt="banner-png" className="w-full h-full object-cover" />
    </div>
  );
};

export default Hero;
