import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import UnAuthenticatedRoutes from "./un-authenticated-routes.tsx";
import Navbar from "../views/layout/navbar.tsx";
import Footer from "@/views/layout/footer.tsx";
import { useTranslate } from "@/context/language-provider.tsx";
import { useAccount } from "@/hooks/useAccount.tsx";
import AuthenticatedRoutes from "@/app/authenticated-routes.tsx";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const { lang }: any = useTranslate();
  const { account } = useAccount();
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const ref = useRef(document.documentElement);
  const Wrapper = ({ children }: { children: ReactNode }) => {
    useLayoutEffect(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, [pathname]);
    return children;
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      setDarkMode(true);
    } else {
      localStorage.theme = "light";
      setDarkMode(false);
    }
  }, []);

  return (
    <div
      className={`${localStorage.theme}`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white dark:bg-dark-secondary">
        <Wrapper>
          {!account?.email ? (
            <UnAuthenticatedRoutes />
          ) : (
            <AuthenticatedRoutes />
          )}
        </Wrapper>
      </main>

      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </div>
  );
}

export default App;
