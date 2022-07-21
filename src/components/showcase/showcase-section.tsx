import React from "react";
import clsx from "clsx";
import { Container } from "~/components/ui";

interface ShowcaseSectionProps {
  className?: string;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ className }) => {
  return (
    <section id="showcase" className={clsx("", className)}>
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

export default ShowcaseSection;
