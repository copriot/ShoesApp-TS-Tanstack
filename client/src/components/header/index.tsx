import type { FC } from "react";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import UserInfo from "./user-info";

const Header: FC = () => {
  const { user, loading, error } = useUser();
  const { logout } = useAuth();
  return (
    <header className="bg-my-faWhite grid grid-cols-3 items-center p-4 md:p-6 lg:p-8 xl:p-10 rounded-[24px] md:rounded-[12px] mb-[24px] md:mb-[28px] xl:mb-[32px]">
      <button className="md:hidden  cursor-pointer w-[20px] h-[20px]">
        <IoMenu className="w-full h-full text-xl " />
      </button>

      <nav className="flex gap-[40px] max-md:hidden max-lg:gap-[9px] max-lg:text-[12px] max-md:text-[12px] font-semibold">
        <Link to="/" className="flex justify-center items-center whitespace-nowrap gap-1">
          New Drops 🔥
        </Link>
        <Link to="/" className="flex justify-center items-center gap-1">
          Men <FaCaretDown />
        </Link>
        <Link to="/" className="flex justify-center items-center gap-1">
          Women <FaCaretDown />
        </Link>
      </nav>
      <Link to="/" className="flex justify-center items-center">
        <img src="/logo.svg" alt="kicks-logo" />
      </Link>
      <UserInfo />
    </header>
  );
};

export default Header;
