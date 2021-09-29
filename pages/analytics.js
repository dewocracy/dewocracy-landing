/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from "next/image";



function Neighbourhoods() {
    const t = useTranslations("analytics");

    return (
        <Layout>
            <SEO
                description={t('text_1')}
                title={`${t('title')} | DeWocracy - Flexible Remote Work`}
                image="analytics"

            />
            <h1 className="font-bold text-primary-800 my-12	text-4xl text-center">{t('title')}</h1>
            <section className="container pb-12 text-primary-800  rounded-2xl  text-xl mx-auto mr-3 ">
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

                    <p className="mt-12  mb-16">
                        <a href="https://calendly.com/dewocracylabs/dewocracy-demo"

                            className="shadow-2xl bg-primary-400 hover:bg-primary-800 text-white text-lg  transition-colors duration-150  rounded-full py-4 px-16 focus:shadow-outline "
                        >
                            {t('button')}
                        </a>

                    </p>
                </div>

                <div className="relative w-full h-md lg:h-xl  flex mb-8 flex-col items-center lg:flex-row">

                    <Image
                        className="object-contain"
                        src="/images/analytics.png"
                        alt="Analytics Screenshot"
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={`/_next/image?url=/images/analytics.png&w=16&q=1`} />


                </div>
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <a className="text-center border-b-2 pb-1 hover:border-black leading-8 	transition-all "
                        >
                            {t('link_text')} &#8594;
                        </a>
                    </Link>
                </div>


            </section>
        </Layout>)
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}

export default Neighbourhoods;