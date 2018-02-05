import React from 'react';
import PropTypes from 'prop-types';

// Components
import ContentImagesWrap from './ContentImagesWrap';
import ContentImage from './ContentImage';

const ContentImages = (props) => {
  
  const images = props.images

  return (
    <ContentImagesWrap className="js-portfolio">
      {images.map((image, i) => {
        return (
          <a key={i} href={image.full} target="_blank">
            <ContentImage src={image.thumb} alt="Click to view image."/>
          </a>
        )
      })}
    </ContentImagesWrap>
  )
}

ContentImages.propTypes = {
  images: PropTypes.array.isRequired
}

export default ContentImages;