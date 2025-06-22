import { useEffect, useRef, useState, type FC } from "react";
import useUser from "../../hooks/useUser";
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const UserInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useUser();
  const { logout } = useAuth();
  const dropdownRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    //eğer tıklanan eleman user iconu değilse modalı kapat
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    //ekrandaki her tıklama olayını izle
    document.addEventListener("click", handleClickOutside);

    //component unmount olduğunda event listener' kaldır
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [user]);

  return (
    <div className="flex justify-end items-center gap-[9px] md:gap-[16px] xl:gap-[24px] text-[24px] max-lg:text-[16px]">
      <button className="cursor-pointer max-md:hidden ">
        <IoSearch className="w-full h-full" />
      </button>

      <button
        ref={dropdownRef}
        className="cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoPerson className="w-full h-full " />
        {user && isOpen && (
          <div className="absolute  bg-my-gray rounded-sm shadow-lg top-5 lg:top-8 right-0 text-center border-none outline-none flex flex-col gap-2">
            <button className="header-buttons">
              {user.firstName} {user.lastName}
            </button>
            {user.role === "admin" && (
              <Link to="/admin" className="header-buttons">
                Admin Board
              </Link>
            )}
            <button onClick={() => logout.mutate()} className="header-buttons">
              Logout
            </button>
          </div>
        )}
      </button>

      <button className="bg-my-yellow rounded-full cursor-pointer size-[24px] grid place-items-center max-lg:size-[20px] text-sm md:text-[14px] ">
        0
      </button>
    </div>
  );
};

export default UserInfo;
