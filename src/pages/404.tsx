import React from "react";
import { useRouter } from "next/router";
import { PageContent, PageLayout } from "~/components/layout";
import { Container } from "~/components/ui";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <PageContent>
        <section
          id="not-found"
          className="flex flex-col items-center justify-center"
        >
          <Container className="flex flex-col items-center justify-center">
            <div className="flex flex-row">
              <h1 className="text-blue-500 text-2xl font-bold">404</h1>
              <h6>Halaman Tidak Ditemukan!</h6>
            </div>
            <div></div>
          </Container>
        </section>
      </PageContent>
    </PageLayout>
  );
}
