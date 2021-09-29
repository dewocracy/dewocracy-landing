const nextBuildId = require('next-build-id')


module.exports = {
    i18n: {
        locales: ['en', 'es', 'ca'],
        defaultLocale: 'es',
    },
    generateBuildId: () => nextBuildId({ dir: __dirname })

}

