import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="w-full bg-fixed min-h-screen bg-darkBlue py-32">
        <section className="container mx-auto text-white px-8 md:px-0">
          <p>
            <Trans>Página no encontrada.</Trans>
          </p>
          <p className="mt-16">
            <a
              href="/"
              className="btn text-greyBlue cursor-pointer w-full md:w-auto"
            >
              <Trans>Volver al inicio</Trans>
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
