import PropTypes from "prop-types";
import React from "react";
function SEO() {


  return (
    <> </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [`dewocracy`, `work office`, `remote work`, `teleworking`],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
