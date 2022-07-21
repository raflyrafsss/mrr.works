import React from "react";
import NextLink from "next/link";
import { Link } from "~/components/ui";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import NavigationMenu from "./navigation-menu";
import NavigationSocialMenu from "./navigation-social-menu";

const Navigation = () => {
  return (
    <nav id="nav" className="flex flex-col lg:flex-row">
      <div className="w-full flex items-center justify-between">
        <div id="nav-logo" className="">
          <NextLink href="/">
            <a className="text-2xl font-bold tracking-tighter">MRR</a>
          </NextLink>
        </div>
        <div className="block lg:hidden">
          <button className="w-8 h-8 inline-flex items-center justify-center text-xl transition-transform active:scale-95">
            <IoMenu />
          </button>
        </div>
      </div>

      <div className="w-full flex items-center text-center justify-center">
        <NavigationMenu />
      </div>

      <div className="w-full flex items-center justify-center lg:justify-end">
        <NavigationSocialMenu />
      </div>
    </nav>
  );
};

export default Navigation;
