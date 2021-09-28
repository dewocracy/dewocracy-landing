/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SavingsCalculator } from "../components/savings-calculator";

import { useTranslations } from 'next-intl';



function Calculator() {
    const t = useTranslations("Calculator");

    return (
        <Layout>
            <SEO title="DeWocracy - Remote Work | Work from anywhere" />

            <h1 className="font-bold text-primary-800 my-12	text-4xl text-center">{t('title')}</h1>
            <div className="w-full py-16 ">
                <section className="container pb-12 bg-purple-800 rounded-2xl  mx-auto  ">
                    <h2 className="font-bold text-primary-800	text-3xl pb-2 md:pb-8 pt-24 text-center">
                        {t('sub_title')}
                    </h2>
                    <SavingsCalculator />





                </section>
            </div>
        </Layout>)
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}

export default Calculator;