import axios from "axios";
import type { AuthResponse } from "../types";

const api = axios.create({
  //api adresi
  baseURL: "http://localhost:5001/api",
  //cookie ile token gönder
  withCredentials: true,
  //api'ye gönderilen verilerin tipi
  headers: {
    "Content-Type": "application/json",
  },
});

//her api isteğinden cevap gelince çalışıcak bir ara yazılım middleware
//eper gelen cevap 401 unothorized ise yani acces token süresi dolduysa
// refresh endpointine istek atıp acces tokenı yenile
// 401 hatası aldığı isteği tekrar gönder
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    // console.log("Ara yazılım hata yakaladı", error);
    //hatayı aldığımız api isteğini sakla
    const orginalReq = error.config;
    //eğer hatanın kodu 401 ise acces tokenın süresi dolduysa
    if (
      error.response.status === 401 &&
      !orginalReq._retry &&
      error.response.data.message === "Access token expired"
    ) {
      orginalReq._retry = true;

      //acces tokenı yenile

      try {
        const res = await api.post<AuthResponse>("/auth/refresh");
        //console.log("acces token yenilendi", res);
        return api(orginalReq);
      } catch (err) {
        //console.log("access tokenı yenileme hatası", err);
        //refresh tokenın süresi doldyusa
        await api.post("/auth/logout");

        //login sayfasına yönlendir ara yazılım oldugu icin javascript ile yönlendir
        window.location.href = "/login";
        //yeni bir hata aldıığında döndür
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
