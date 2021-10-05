import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { useRouter } from "next/router"
import { OutboundLink } from "../utils/OutboundLink";

function ContactPage() {
  const router = useRouter()

  const t = useTranslations("contact_form");

  return (
    <Amplitude
      eventProperties={(inheritedProps) => ({
        ...inheritedProps,
        page: {
          ...inheritedProps.page,
          name: 'contact-thanks',
          language: router.locale,
          path: router.pathname
        },
      })}
    >
    <Layout>
        <LogOnMount eventType="page view" />

      <SEO title="Thanks for contacting us!" />
      <div className="w-full bg-fixed min-h-screen  py-32">
        <section className="container mx-auto  px-8 md:px-0">
          <div className="flex justify-center">
            <p className="max-w-xl text-center text-primary-800 text-3xl font-bold">
              {t('thanks')}
          </p>

          </div>
          <div className="flex  text-primary-800 text-2xl justify-center mt-16">
              <Link href="" passHref>
                <OutboundLink eventProperties={{ location: "contact-thanks" }}
              className="shadow-2xl  bg-primary-800 hover:bg-primary-400 text-white px-6 py-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline "
            >
              {t('back_to_home')}
                </OutboundLink>
            </Link>
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

export default ContactPage;
