import { useMemo } from "react";
interface MenuItem {
  id: number;
  name: string;
  href: string;
}

interface FooterItem {
  id: number;
  name: string;
}

function useMenus() {
  const menuItem: MenuItem[] = useMemo(
    () => [
      {
        id: 1,
        href: "/",
        name: "home",
      },
      {
        id: 2,
        href: "/",
        name: "category",
      },
      {
        id: 3,
        href: "/",
        name: "price",
      },
      {
        id: 4,
        href: "/",
        name: "contactUs",
      },
    ],
    [],
  );

  const footerItems: FooterItem[] = useMemo(
    () => [
      {
        id: 1,
        name: "link_1",
      },
      {
        id: 2,
        name: "link_2",
      },
      {
        id: 3,
        name: "link_3",
      },
      {
        id: 4,
        name: "link_4",
      },
      {
        id: 5,
        name: "link_5",
      },
      {
        id: 6,
        name: "link_6",
      },
    ],
    [],
  );

  return {
    menuItem,
    footerItems,
  };
}

export default useMenus;
