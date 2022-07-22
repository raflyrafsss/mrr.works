import React from "react";
import clsx from "clsx";

type PageContentProps = React.HTMLAttributes<HTMLDivElement>;

const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      id="content-wrapper"
      className={clsx("flex-1 py-20 lg:py-12", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default PageContent;
