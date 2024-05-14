import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMenus from "@/hooks/useMenus.ts";
import Logo from "@/assets/logo.svg";
import Hamberger from "@/assets/list.svg";
import Sun from "@/assets/sun.svg";
import Moon from "@/assets/moon.svg";

import Button from "@/components/Button/Button.tsx";
import { useTranslate } from "@/context/language-provider.tsx";
import { useAccount } from "@/hooks/useAccount.tsx";
import { ButtonLang } from "@/components/Button/languegesButton.tsx";
import toast from "react-hot-toast";

const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (x: boolean) => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { menuItem } = useMenus();
  const { dictionary, lang, setLang }: any = useTranslate();
  const { account } = useAccount();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
    toast.success(dictionary?.toast_messages?.logout);
  };

  return location === "/login" || location === "/register" ? null : (
    <header className="w-full h-14 border-b fixed top-0 z-40 bg-white dark:bg-dark-secondary">
      <div className="relative md:px-16 px-2 h-full flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-14" />

        <div className="md:hidden flex gap-2">
          <div
            className="w-9 h-9 rounded-lg flex justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-tertiary cursor-pointer border"
            onClick={() => {
              if (localStorage.theme === "dark") {
                localStorage.theme = "light";
              } else {
                localStorage.theme = "dark";
              }
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <img src={Moon} alt="hamberger" className="w-6 h-6" />
            ) : (
              <img src={Sun} alt="hamberger" className="w-6 h-6" />
            )}
          </div>
          <ButtonLang languages={lang} setLanguages={setLang} />
          <div
            className="w-9 h-9 bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-300 dark:hover:bg-dark-tertiary cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img src={Hamberger} alt="hamberger" className="w-8 h-8" />
          </div>
        </div>
        {open && (
          <div
            className={`md:hidden w-full sm:h-52 h-28 flex flex-col gap-3 overflow-y-scroll absolute top-14 right-0 left-0 border bg-white dark:bg-dark-tertiary ease-in duration-500 p-2 rounded-b-lg`}
          >
            <div className="flex flex-col">
              {menuItem.map((item) => (
                <h2
                  key={item.id}
                  onClick={() => {
                    navigate(item.href);
                    setOpen(false);
                  }}
                  className="bg-white dark:bg-dark-tertiary border-b hover:bg-gray-200 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 font-semibold cursor-pointer py-1"
                >
                  {dictionary?.header[item.name]}
                </h2>
              ))}
            </div>

            <div className="flex sm:gap-4 gap-2 items-center">
              {account?.email ? (
                <>
                  <Button
                    className="h-10 w-fit border border-gray-400 hover:bg-blue-500 hover:text-white dark:text-white"
                    onClick={() => navigate("/add-adv")}
                  >
                    {dictionary?.header?.addAdv}
                  </Button>
                  <Button
                    className="h-10 w-fit border border-gray-400 hover:bg-red-500 hover:text-white dark:text-white"
                    onClick={() => handleLogout()}
                  >
                    {dictionary?.header?.logout}
                  </Button>
                  <img
                    src={account.avatar}
                    alt={`${account.username} avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                </>
              ) : (
                <Button
                  className="h-10 w-fit border border-gray-400 hover:bg-blue-500 hover:text-white dark:text-white"
                  onClick={() => navigate("/login")}
                >
                  {dictionary?.header?.login}
                </Button>
              )}
            </div>
          </div>
        )}

        <div className="h-full md:flex gap-6 items-center hidden">
          {menuItem.map((item) => (
            <h2
              key={item.id}
              onClick={() => navigate(item.href)}
              className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-500 font-semibold hover:text-blue-500 cursor-pointer"
            >
              {dictionary?.header[item.name]}
            </h2>
          ))}
        </div>

        <div className="md:flex gap-3 items-center hidden">
          <div
            className="w-9 h-9 rounded-lg flex justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-tertiary cursor-pointer border"
            onClick={() => {
              if (localStorage.theme === "dark") {
                localStorage.theme = "light";
              } else {
                localStorage.theme = "dark";
              }
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <img src={Moon} alt="hamberger" className="w-6 h-6" />
            ) : (
              <img src={Sun} alt="hamberger" className="w-6 h-6" />
            )}
          </div>
          <ButtonLang languages={lang} setLanguages={setLang} />
          {account?.email ? (
            <>
              <Button
                className="h-10 w-fit border border-gray-400 hover:bg-blue-500 hover:text-white dark:text-white"
                onClick={() => navigate("/add-adv")}
              >
                {dictionary?.header?.addAdv}
              </Button>
              <Button
                className="h-10 w-fit border border-gray-400 hover:bg-red-500 hover:text-white dark:text-white"
                onClick={() => handleLogout()}
              >
                {dictionary?.header?.logout}
              </Button>
              <img
                src={account.avatar}
                alt={`${account.username} avatar`}
                className="w-10 h-10 rounded-full"
              />
            </>
          ) : (
            <Button
              className="h-10 w-fit border border-gray-400 hover:bg-blue-500 hover:text-white dark:text-white"
              onClick={() => navigate("/login")}
            >
              {dictionary?.header?.login}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
