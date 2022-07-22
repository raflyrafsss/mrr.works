import clsx from "clsx";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, id }) => {
  return (
    <main
      id={id}
      className={clsx(
        "relative antialiased bg-gray-50 text-gray-600 overflow-hidden",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Layout;
