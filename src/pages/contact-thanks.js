import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Thanks for contacting us!" />
      <div className="w-full bg-fixed min-h-screen bg-darkBlue py-32">
        <section className="container mx-auto text-white px-8 md:px-0">
          <p>
            Gracias por contactar con nostros! Te responderemos lo antes
            possible!
          </p>
          <p className="mt-16">
            <a
              href="/"
              className="btn text-greyBlue cursor-pointer w-full md:w-auto"
            >
              Volver al inicio
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default ContactPage;
