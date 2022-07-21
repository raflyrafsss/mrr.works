import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, className, href, ...props }) => {
  return (
    <NextLink href={href}>
      <a
        className={clsx(
          "font-medium text-blue-500 hover:text-blue-500/80",
          className
        )}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
