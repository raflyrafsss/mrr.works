import clsx from "clsx";
import React from "react";
import { Container } from "../ui";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={clsx("", className)}>
      <Container className="flex flex-col lg:flex-row gap-x-8">
        <div className="w-full">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel
            atque, impedit mollitia ab nihil consequuntur illum facilis tempora
            at veniam, optio distinctio quo placeat molestiae aliquid expedita
            blanditiis nam.
          </p>
        </div>
        <div className="w-full">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel
            atque, impedit mollitia ab nihil consequuntur illum facilis tempora
            at veniam, optio distinctio quo placeat molestiae aliquid expedita
            blanditiis nam.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
