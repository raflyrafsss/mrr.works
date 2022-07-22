import clsx from "clsx";
import React from "react";
import { Container } from "../ui";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={clsx("", className)}>
      <Container className="flex flex-col">
        <h1 className="mb-6 text-4xl tracking-tight font-bold">about</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              quos amet accusamus animi maxime, qui facere dignissimos veritatis
              optio inventore perferendis reiciendis saepe sit libero corporis
              dolorum incidunt. Ab, officiis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus nemo laudantium quisquam
              dolor. Adipisci similique voluptates voluptas at quibusdam
              eligendi! Molestias neque excepturi vel minima ea at nihil, nemo
              consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quibusdam quisquam sunt labore vitae libero exercitationem
              ut fugiat laudantium harum ducimus ipsam reprehenderit eligendi
              fugit commodi nisi quidem expedita, ullam nemo!
            </p>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              quos amet accusamus animi maxime, qui facere dignissimos veritatis
              optio inventore perferendis reiciendis saepe sit libero corporis
              dolorum incidunt. Ab, officiis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus nemo laudantium quisquam
              dolor. Adipisci similique voluptates voluptas at quibusdam
              eligendi! Molestias neque excepturi vel minima ea at nihil, nemo
              consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quibusdam quisquam sunt labore vitae libero exercitationem
              ut fugiat laudantium harum ducimus ipsam reprehenderit eligendi
              fugit commodi nisi quidem expedita, ullam nemo!
            </p>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              quos amet accusamus animi maxime, qui facere dignissimos veritatis
              optio inventore perferendis reiciendis saepe sit libero corporis
              dolorum incidunt. Ab, officiis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus nemo laudantium quisquam
              dolor. Adipisci similique voluptates voluptas at quibusdam
              eligendi! Molestias neque excepturi vel minima ea at nihil, nemo
              consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quibusdam quisquam sunt labore vitae libero exercitationem
              ut fugiat laudantium harum ducimus ipsam reprehenderit eligendi
              fugit commodi nisi quidem expedita, ullam nemo!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
