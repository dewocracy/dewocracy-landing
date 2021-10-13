/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { useRouter } from "next/router"
import { OutboundLink } from "../utils/OutboundLink";


function Neighbourhoods() {
    const t = useTranslations("manage_remotework");
    const router = useRouter()

    return (
        <Amplitude
            eventProperties={(inheritedProps) => ({
                ...inheritedProps,
                page: {
                    ...inheritedProps.page,
                    name: 'manage remotework',
                    language: router.locale,
                    path: router.pathname
                },
            })}
        >
        <Layout>
            <SEO
                description={t('text_1')}
                title={`${t('title')} | DeWocracy - Flexible Remote Work`}
                image="manage_remotework"
            />
                <LogOnMount eventType="page view" />

                <h1 className="font-bold  my-12	text-3xl text-center">{t('title')}</h1>
                <section className="container pb-12   rounded-2xl  text-xl mx-auto  ">
                <div className=" flex flex-col items-center">

                    <p className="mb-4 max-w-xl text-center">{t('text_1')}</p>
                </div>
                <div className=" flex flex-col items-center">

                    <p className="max-w-3xl mb-4 text-center ">{t('text_2')}</p>
                </div>
                <div className=" flex flex-col items-center">

                    <p className="mb-4 max-w-xl text-center">  {t('text_3')}</p>
                </div>


                <div className="flex flex-col items-center">

                    <p className="mt-8  mb-16">
                            <OutboundLink
                                eventProperties={{ location: "manage-remotework-landing" }}

                                href="https://app.dewocracy.com/register/free"

                                className="shadow-2xl bg-primary-400 hover:bg-primary-800 text-white text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-8 focus:shadow-outline "
                        >
                            {t('button')}
                            </OutboundLink>

                    </p>
                </div>

                <div className="relative w-full h-md lg:h-xl flex flex-col items-center lg:flex-row">

                    <Image
                        className="object-contain"
                        src="/images/remotework.png"
                        alt="Manage Remotework Screenshot"
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={`/_next/image?url=/images/remotework.png&w=16&q=1`} />

                </div>
                <div className="flex flex-col items-center">
                        <Link href="/" passHref>
                            <OutboundLink
                                eventProperties={{ location: "manage-remotework-landing" }} className="text-center border-b-2 pb-1 hover:border-black text-primary-400 hover:text-black leading-8 	transition-all "
                        >
                            {t('link_text')} &#8594;
                            </OutboundLink>
                    </Link>
                </div>


            </section>
            </Layout>
        </Amplitude>)
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}

export default Neighbourhoods;