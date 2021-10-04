const amplitudeEventTypes = {
    outboundLinkClick: 'link-clicked',
    pageView: 'page view',
    signup: 'create owner account started',
    accessApp: 'access web app',
    editedCalculator: "edited data in the saving calculator"
};


const logEvent = (type, properties) => {

    const parsedType = amplitudeEventTypes[type] || type;


    if (typeof window.amplitude === 'object') {
        window.amplitude.getInstance().logEvent(parsedType, properties)
    }

}

const amplitudeExcludePaths = []

export { amplitudeEventTypes, amplitudeExcludePaths, logEvent }