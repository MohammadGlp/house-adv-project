import { useLocation, useNavigate } from "react-router-dom";
import { ButtonAuth } from "./auth-button.tsx";
import Logo from "@/assets/logo.svg";
import {useTranslate} from "@/context/language-provider.tsx";
const AuthNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { dictionary }: any = useTranslate();

  return (
    <>
      {/*<div className="container mx-auto"> </div>*/}
      <div className="flex justify-between m-7 relative z-10">
        <div className="flex cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} className="w-12" alt="" />
        </div>
        <div>
          <ButtonAuth
            classButton="w-36 border-2 border-black px-10 py-4 hover:bg-black hover:text-white"
            onClick={() => {
              return location === "/login"
                ? navigate("/register")
                : navigate("/login");
            }}
          >
            {location === "/login" ? dictionary?.register?.title_btn_navbnar : dictionary?.login?.title_btn_navbnar}
          </ButtonAuth>
        </div>
      </div>
    </>
  );
};

export default AuthNavbar;
