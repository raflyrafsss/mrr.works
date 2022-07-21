import React from "react";
import clsx from "clsx";

type PageLayoutProps = React.HTMLAttributes<HTMLDivElement>;

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      id="root-content"
      className={clsx("flex flex-col min-h-screen", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default PageLayout;
