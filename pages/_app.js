import React from 'react';
import 'tailwindcss/tailwind.css'

import { NextIntlProvider } from 'next-intl';



// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    // eslint-disable-next-line react/prop-types
    return <NextIntlProvider messages={pageProps.messages}>

        <Component {...pageProps} />
    </NextIntlProvider>

}



export default MyApp