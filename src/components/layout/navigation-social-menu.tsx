import React from "react";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import clsx from "clsx";

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

interface NavigationSocialMenuProps {
  className?: string;
}

const NavigationSocialMenu: React.FC<NavigationSocialMenuProps> = ({
  className,
}) => {
  return (
    <ul className={className}>
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
