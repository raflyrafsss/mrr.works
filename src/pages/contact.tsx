import React from "react";
import { ContactSection } from "~/components/contact";
import {
  PageContent,
  PageFooter,
  PageHeader,
  PageLayout,
} from "~/components/layout";

export default function Contact() {
  return (
    <PageLayout>
      <PageHeader />
      <PageContent>
        <ContactSection />
      </PageContent>
      <PageFooter />
    </PageLayout>
  );
}
