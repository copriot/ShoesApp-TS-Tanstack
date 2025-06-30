import type { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header";
import useUser from "../../hooks/useUser";
import Loader from "../loader";

interface ProtectedProps {
  allowedRoles?: string[];
}

const Protected: FC<ProtectedProps> = ({ allowedRoles }) => {
  //oturumu acık olan kullanıcı verisine eriş
  //hook kullanıldığı component renderlandığı anda api isteğini atıp veriyi alıyoruz
  const { user, loading, error } = useUser();
  // console.log(user);
  //kullanıcı verisi yüklenirken loader göster
  if (loading) return <Loader />;

  //eğer rolü yetersizse login sayfasına yönlendir
  if (allowedRoles && !allowedRoles.includes(user?.role!))
    return <Navigate to="/login" />;
  //kullanıcı verisi yüklendiyse sayfayı göster
  if (user) {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
  //kullanıcı verisi yüklenemediyse login sayfasına yönlendir
  if (error) return <Navigate to="/login" />;
};
export default Protected;
