import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  id,
  ...props
}) => {
  return (
    <main id={id} className={className}>
      {children}
    </main>
  );
};

export default Layout;
