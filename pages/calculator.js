/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SavingsCalculator } from "../components/savings-calculator";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { useRouter } from "next/router"



function Calculator() {
    const router = useRouter()

    const { t } = useTranslation("calculator");

    return (
        <Amplitude
            eventProperties={(inheritedProps) => ({
                ...inheritedProps,
                page: {
                    ...inheritedProps.page,
                    name: 'calculator page',
                    language: router.locale,
                    path: router.pathname
                },
            })}
        >
        <Layout>
                <LogOnMount eventType="page view" />

            <SEO
                description={t('sub_title')}
                title={`${t('title')} | DeWocracy - Remote Work | Work from anywhere"`}
                image="calculator"

            />

            <h1 className="font-bold text-primary-800 my-12	text-4xl text-center">{t('title')}</h1>
            <div className="w-full py-16 ">
                <section className="container pb-12 bg-purple-800 rounded-2xl  mx-auto  ">
                    <h2 className="font-bold text-primary-800	text-3xl pb-2 md:pb-8 pt-24 text-center">
                        {t('sub_title')}
                    </h2>
                        <SavingsCalculator />





                </section>
            </div>
            </Layout>
        </Amplitude>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['footer', 'header', 'calculator'])),
        },
    };
}

export default Calculator;