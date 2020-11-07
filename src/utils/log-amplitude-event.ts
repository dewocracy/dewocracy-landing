
export const logAmplitudeEvent = (eventName: string, additionalProps = {}) => {
    if (window?.amplitude?.options) {
        return Promise.resolve()
    }

    return new Promise(resolve => {
        window.amplitude.getInstance().logEvent(eventName, additionalProps, () => resolve())
    })
}

export const EVENTS = {
    "SUBMIT_FORM": "SubmitForm",
};
