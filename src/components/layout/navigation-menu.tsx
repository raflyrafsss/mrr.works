import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import clsx from "clsx";

const DataNavigationMenu = [
  {
    menu: "Home",
    path: "/",
  },
  {
    menu: "About",
    path: "/about",
  },
  {
    menu: "Showcase",
    path: "/showcase",
  },
  {
    menu: "Contact",
    path: "/contact",
  },
];

const NavigationMenu = () => {
  const router = useRouter();
  return (
    <ul className="flex flex-col lg:flex-row gap-x-4 gap-y-2">
      {DataNavigationMenu.map((value, index) => (
        <li key={index}>
          <NextLink href={value.path}>
            <a
              className={clsx(
                "text-sm uppercase tracking-tight hover:text-blue-500/90",
                router &&
                  router.pathname === value.path &&
                  "font-semibold text-blue-500"
              )}
            >
              {value.menu}
            </a>
          </NextLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
