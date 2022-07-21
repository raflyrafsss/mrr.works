import React from "react";
import clsx from "clsx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("mx-auto px-6 w-full lg:w-10/12 2xl:w-12/12", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
