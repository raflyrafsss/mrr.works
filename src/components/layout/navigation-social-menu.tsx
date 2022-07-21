import React from "react";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const SocialNavigationMenu = [
  {
    menu: <IoLogoGithub />,
    path: "https://github.com/raflyrafsss",
  },
  {
    menu: <IoLogoInstagram />,
    path: "https://instagram.com/raflyrafsss",
  },
  {
    menu: <IoLogoTwitter />,
    path: "https://twitter.com/raflyrafsss",
  },
];

const NavigationSocialMenu = () => {
  return (
    <ul className="flex flex-row gap-x-4">
      {SocialNavigationMenu.map((value, index) => (
        <li key={index}>
          <NextLink href={value.path}>
            <a className="text-lg text-gray-600 hover:text-blue-500/80">
              {value.menu}
            </a>
          </NextLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationSocialMenu;
