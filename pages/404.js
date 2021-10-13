import React from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { useRouter } from "next/router"
import { OutboundLink } from "../utils/OutboundLink";

function NotFoundPage() {
  const t = useTranslations("404");
  const router = useRouter()

  return (
    <Amplitude
      eventProperties={(inheritedProps) => ({
        ...inheritedProps,
        page: {
          ...inheritedProps.page,
          name: '404 error page',
          language: router.locale,
          path: router.pathname
        },
      })}
    >
    <Layout>
        <LogOnMount eventType="page view" />

      <SEO title="404: Not found" />
      <div className="w-full bg-fixed min-h-screen  py-32">
        <section className=" container mx-auto text-primary-800 px-8 md:px-0">
            <h1 className="text-center font-bold text-3xl">
            {t('not_found')}
          </h1>
          <div className="flex justify-center">
          <p className="mt-16">
                <Link href="/" passHref>
                  <OutboundLink eventProperties={{ location: "404-error-page" }}


                className="shadow-2xl  bg-primary-800 hover:bg-primary-400 text-white px-6 py-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline "
            >
                {t('back_to_home')}
                  </OutboundLink>
            </Link>
          </p>
          </div>
        </section>
      </div>
    </Layout>
    </Amplitude>
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
