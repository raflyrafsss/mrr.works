import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <a
        className={clsx(
          "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-lg bg-blue-500 text-white shadow-blue-500/30",
          className
        )}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default ButtonLink;
