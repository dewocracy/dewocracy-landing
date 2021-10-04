import React from "react"
import PropTypes from "prop-types"

import { amplitudeEventTypes } from "./AmplitudeHelper"
import { Amplitude } from '@amplitude/react-amplitude';
import { useRouter } from "next/router";

const OutboundLink = React.forwardRef(({ eventType, eventProperties, ...props }, ref) => {

  const router = useRouter();

  const amplitudeEventProperties = Object.assign({ href: props.href, language: router.locale }, eventProperties);

  return (

    <Amplitude
      eventProperties={inheritedProps => ({
        ...inheritedProps,
        href: props.href,
        ...eventProperties
      })}
    >
      {({ instrument, logEvent }) => (
        <a {...props} ref={ref} onClick={e => {
          const amplitudeEventType = eventType || amplitudeEventTypes.outboundLinkClick;

          if (typeof props.onClick === `function`) {
            instrument('button click', props.onClick)
          }

          let redirect = true
          if (
            e.button !== 0 ||
            e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            e.shiftKey ||
            e.defaultPrevented
          ) {
            redirect = false
          }
          if (props.target && props.target.toLowerCase() !== `_self`) {
            redirect = false
          }
          logEvent(amplitudeEventType, amplitudeEventProperties, () => {
            if (redirect) {
              document.location = props.href
            }
          })

          return false
        }} />
      )}
    </Amplitude>
  )

})

OutboundLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  eventType: PropTypes.string,
  eventProperties: PropTypes.object,
}

export { OutboundLink }