import React from 'react';
import 'tailwindcss/tailwind.css'

import { NextIntlProvider } from 'next-intl';
import {
    AmplitudeProvider,
    Amplitude,
} from "@amplitude/react-amplitude";

import { isBrowser } from '@unly/utils';
import CookieBot from "react-cookiebot"


// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {

    let amplitudeInstance
    if (isBrowser()) {
        const amplitude = require('amplitude-js');
        amplitudeInstance = amplitude.getInstance();

        // https://help.amplitude.com/hc/en-us/articles/115001361248#settings-configuration-options
        amplitudeInstance.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, null, {
            includeGclid: true,
            includeReferrer: true, // https://help.amplitude.com/hc/en-us/articles/215131888#track-referrers
            includeUtm: true,

        });

        amplitudeInstance.setVersionName(process.env.APP_VERSION); // e.g: 1.0.0

    }


    // eslint-disable-next-line react/prop-types
    return <AmplitudeProvider
        amplitudeInstance={amplitudeInstance}
        apiKey={process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY}
    >
        <Amplitude
            // DA Event props and user props are sometimes duplicated to ease the data analysis through Amplitude
            //  Because charts are sometimes easier to build using events props, or user users props
            eventProperties={{
                app: {
                    name: 'dewocracy-landing',
                    version: '2.0-desk-landing',
                    stage: process.env.APP_STAGE,
                }
            }}
        >
            <CookieBot domainGroupId={process.env.NEXT_PUBLIC_COOKIEBOT_GROUP_ID} />

            <NextIntlProvider messages={pageProps.messages}>

                <Component {...pageProps} />
            </NextIntlProvider>
        </Amplitude>
    </AmplitudeProvider>

}



export default MyApp