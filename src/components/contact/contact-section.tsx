import React from "react";
import { Container } from "~/components/ui";

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  return (
    <section id="contact" className={className}>
      <Container className="flex flex-col lg:flex-row gap-x-8">
        <div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum
            eius reprehenderit autem excepturi officia soluta, veniam vitae
            tempora? Repellat sapiente optio maxime debitis natus dolores cum
            voluptatibus? Neque, aspernatur!
          </p>
        </div>

        <div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum
            eius reprehenderit autem excepturi officia soluta, veniam vitae
            tempora? Repellat sapiente optio maxime debitis natus dolores cum
            voluptatibus? Neque, aspernatur!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
