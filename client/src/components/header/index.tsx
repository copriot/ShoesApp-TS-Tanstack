import type { FC } from "react";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";

const Header: FC = () => {
  const { user, loading, error } = useUser();
  const { logout } = useAuth();
  return (
    <div>
      <h1>HEADER</h1>
      <button onClick={() => logout.mutate()}>Logout</button>
    </div>
  );
};

export default Header;
