import React from "react";
import {
  PageContent,
  PageFooter,
  PageHeader,
  PageLayout,
} from "~/components/layout";
import { ShowcaseSection } from "~/components/showcase";

export default function Showcase() {
  return (
    <PageLayout>
      <PageHeader />
      <PageContent className="">
        <ShowcaseSection />
      </PageContent>
      <PageFooter />
    </PageLayout>
  );
}
