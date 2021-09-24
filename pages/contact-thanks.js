import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTranslations } from 'next-intl';

function ContactPage() {

  const t = useTranslations("Default");

  return (
    <Layout>
      <SEO title="Thanks for contacting us!" />
      <div className="w-full bg-fixed min-h-screen bg-darkBlue py-32">
        <section className="container mx-auto text-white px-8 md:px-0">
          <p>
            {t('Thanks for containing us! We will get in touch with you shortly')}
          </p>
          <p className="mt-16">
            <a
              href="/"
              className="btn text-greyBlue cursor-pointer w-full md:w-auto"
            >
              {t('Back to home')}
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default ContactPage;
