import React from "react";
import clsx from "clsx";

type PageContentProps = React.HTMLAttributes<HTMLDivElement>;

const PageContent: React.FC<PageContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div id="content-wrapper" className={clsx("flex-1", className)} {...props}>
      {children}
    </div>
  );
};

export default PageContent;
