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
        {/* <h6 className="font-medium">SOFTWARE ENGINEER</h6> */}
        <h1 className="font-bold text-4xl">MUHAMMAD RAFLY RAFSANJANI</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
          culpa.
        </p>
      </Container>
    </section>
  );
};

export default HomeSection;
