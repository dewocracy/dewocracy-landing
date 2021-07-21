import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {

  const domainGroupId = process.env.GATSBY_COOKIEBOT_GROUP_ID
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid={domainGroupId} data-blockingmode="auto" type="text/javascript"></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script id="CookieDeclaration" src={`https://consent.cookiebot.com/${domainGroupId}/cd.js`} type="text/javascript" async></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
