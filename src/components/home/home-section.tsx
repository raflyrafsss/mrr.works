import clsx from "clsx";
import React from "react";
import { ButtonLink, Container } from "../ui";

interface HomeSectionProps {
  className?: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ className }) => {
  return (
    <section
      id="home"
      className={clsx("flex items-center justify-center", className)}
    >
      <Container className="text-center">
        <h1 className="font-bold text-4xl text-gray-800">
          MUHAMMAD RAFLY RAFSANJANI
        </h1>
        <p className="uppercase">
          Software Developer Based in Bekasi, West Java
        </p>
      </Container>
    </section>
  );
};

export default HomeSection;
