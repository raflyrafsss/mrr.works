import React from "react";
import { AboutSection } from "~/components/about";
import {
  PageContent,
  PageFooter,
  PageHeader,
  PageLayout,
} from "~/components/layout";

export default function About() {
  return (
    <PageLayout>
      <PageHeader />
      <PageContent>
        <AboutSection className="py-12" />
      </PageContent>
      <PageFooter />
    </PageLayout>
  );
}
