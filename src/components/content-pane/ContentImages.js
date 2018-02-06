import React from 'react';
import PropTypes from 'prop-types';

// Components
import Lightbox from 'react-image-lightbox';
import ContentImagesWrap from './ContentImagesWrap';
import ContentImage from './ContentImage';

class ContentImages extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  onThumbClick = (e, index) => {
    e.preventDefault();
    this.setState({isOpen: true, photoIndex: index});
  }

  onCloseImage = () => {
    this.setState({isOpen: false});
  }

  onChangeImage = (image) => {
    this.setState({photoIndex: image});
  }

  render() {
    const images = this.props.images
    const photoIndex = this.state.photoIndex;
    const isOpen = this.state.isOpen;

    const nextIndex = (photoIndex + 1) % images.length;
    const prevIndex = (photoIndex + images.length - 1) % images.length;

    const mainImg = images[photoIndex].full;
    const nextImg = images[nextIndex].full;
    const prevImg = images[prevIndex].full;

    return (
      <ContentImagesWrap>
        {images.map((image, i) => {
          return (
            <a key={i} href={image.full} onClick={(e) => this.onThumbClick(e, i)} target="_blank">
              <ContentImage src={image.thumb} alt="Click to view image."/>
            </a>
          )
        })}
        {isOpen && (
          <Lightbox
            mainSrc={mainImg}
            nextSrc={nextImg}
            prevSrc={prevImg}
            onCloseRequest={this.onCloseImage}
            onMovePrevRequest={() => this.onChangeImage(prevIndex)}
            onMoveNextRequest={() => this.onChangeImage(nextIndex)}
            enableZoom={false}
          />
        )}
      </ContentImagesWrap>
    )
  }
}

ContentImages.propTypes = {
  images: PropTypes.array.isRequired
}

export default ContentImages;
