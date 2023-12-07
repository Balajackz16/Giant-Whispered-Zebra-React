import React from 'react'

import PropTypes from 'prop-types'

import './pasted-image.css'

const PastedImage = (props) => {
  return (
    <div className="pasted-image-container">
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="pasted-image-pasted-image"
      />
    </div>
  )
}

PastedImage.defaultProps = {
  pastedImage_src: '/external/pastedimage-f9bd-600h.png',
  pastedImage_alt: 'pastedImage',
}

PastedImage.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default PastedImage
