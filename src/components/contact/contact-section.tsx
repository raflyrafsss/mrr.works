import clsx from "clsx";
import React from "react";
import { Container } from "~/components/ui";

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  return (
    <section
      id="contact"
      className={clsx("flex items-center justify-center", className)}
    >
      <Container className="flex flex-col">
        <h1 className="mb-6 text-4xl tracking-tight font-bold">
          get in touch <span className="text-2xl">👋</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-x-8">
          <h2 className="text-4xl font-bold text-gray-800">
            muh.raflyrafsanjani@gmail.com
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
