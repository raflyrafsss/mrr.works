import React from "react";
import { Container } from "~/components/ui";
import { Navigation } from "~/components/layout";

const PageHeader = () => {
  return (
    <header
      id="content-header"
      className="w-full h-auto lg:h-16 flex items-center border-b border-gray-200"
    >
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default PageHeader;
