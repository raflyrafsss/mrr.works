import React from "react";
import { Container, Link } from "~/components/ui";

const PageFooter = () => {
  return (
    <footer
      id="content-footer"
      className="w-full h-12 flex items-center justify-center border-t border-gray-200"
    >
      <Container className="flex items-center justify-center">
        <span className="block text-xs text-gray-600">
          by <Link href="/">MRR Works</Link>
        </span>
      </Container>
    </footer>
  );
};

export default PageFooter;
