import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Política de cookies" />
      <div className="w-full bg-fixed min-h-screen py-32">
        <section className="container mx-auto px-8 md:px-0">
          <h1 className="text-4xl font-bold">
            <Trans>Política de cookies</Trans>
          </h1>
          <h2 className="text-2xl font-bold py-6">Que son las cookies?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            blanditiis dolores enim et laborum nulla odit perspiciatis sit unde
            vel. Corporis doloribus dolorum ducimus ea maxime nobis saepe sed
            vero?
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default ContactPage;
