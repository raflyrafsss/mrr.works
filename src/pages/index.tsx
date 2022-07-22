import React from "react";
import { HomeSection } from "~/components/home";
import {
  PageContent,
  PageFooter,
  PageHeader,
  PageLayout,
} from "~/components/layout";

export default function Home() {
  return (
    <PageLayout>
      <PageHeader />
      <PageContent>
        <HomeSection />
      </PageContent>
      <PageFooter />
    </PageLayout>
  );
}
