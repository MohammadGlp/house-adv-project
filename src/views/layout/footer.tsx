import {useLocation, useNavigate} from "react-router-dom";
import useMenus from "@/hooks/useMenus.ts";
import { useTranslate } from "@/context/language-provider.tsx";
import Logo from "@/assets/logo.svg";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { menuItem, footerItems } = useMenus();
  const { dictionary }: any = useTranslate();

  return location === "/login" || location === "/register" ? null :  (
    <footer className="h-fit border-t bg-gray-100 dark:bg-dark-tertiary px-20">
      <div className="flex flex-col gap-16 mt-16 mb-7">
        <div className="h-full flex justify-between items-center gap-1">
          <div className="h-full flex flex-col gap-2">
            <h3 className="mb-1 dark:text-white">{dictionary?.footer?.title?.menu}</h3>
            {menuItem.map((item) => (
              <h2
                key={item.id}
                onClick={() => navigate(item.href)}
                className="text-gray-600 dark:text-gray-500 font-semibold hover:text-blue-500 cursor-pointer"
              >
                {dictionary?.header[item.name]}
              </h2>
            ))}
          </div>
          <div className="h-full flex flex-col gap-2">
            <h3 className="mb-1 dark:text-white">{dictionary?.footer?.title?.more}</h3>
            {menuItem.map((item) => (
              <h2
                key={item.id}
                onClick={() => navigate(item.href)}
                className="text-gray-600 dark:text-gray-500 font-semibold hover:text-blue-500 cursor-pointer"
              >
                {dictionary?.header[item.name]}
              </h2>
            ))}
          </div>
          <div className="h-full flex flex-col gap-2">
            <h3 className="mb-1 dark:text-white">{dictionary?.footer?.title?.most}</h3>
            {menuItem.map((item) => (
              <h2
                key={item.id}
                onClick={() => navigate(item.href)}
                className="text-gray-600 dark:text-gray-500 font-semibold hover:text-blue-500 cursor-pointer"
              >
                {dictionary?.header[item.name]}
              </h2>
            ))}
          </div>
          <div className="h-full invisible">1</div>
        </div>
        <div className="w-full sm:flex hidden justify-between items-center">
          <div className="flex gap-5">
            {footerItems.map((item) => (
              <h4 key={item.id} className="text-gray-500">
                {dictionary?.footer?.items[item.name]}
              </h4>
            ))}
          </div>
          <div>
            <img src={Logo} alt="logo" className="w-14" />
          </div>
        </div>
      </div>
      <div className="border-t-2 py-4 text-gray-500 flex flex-col items-center">
        <div className="sm:hidden block">
          <img src={Logo} alt="logo" className="w-14" />
        </div>
        <p className="text-center">{dictionary?.footer?.copyRight}</p>
      </div>
    </footer>
  );
};

export default Footer;
