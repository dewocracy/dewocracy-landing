import React from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  const t = useTranslations("Default");

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="w-full bg-fixed min-h-screen bg-darkBlue py-32">
        <section className="container mx-auto text-white px-8 md:px-0">
          <p>
            {t('PAGE_NOT_FOUND')}
          </p>
          <p className="mt-16">
            <Link href="/"><a

              className="btn text-greyBlue cursor-pointer w-full md:w-auto"
            >
              {t('Back to home')}
            </a>
            </Link>
          </p>
        </section>
      </div>
    </Layout>
  );
}


export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

export default NotFoundPage;
