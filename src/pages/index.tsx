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
    <PageLayout className="">
      <PageHeader />
      <PageContent className="">
        <HomeSection />
      </PageContent>
      <PageFooter />
    </PageLayout>
  );
}
