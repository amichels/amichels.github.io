import styled from 'styled-components';

// configs
import mq from '../../configs/mediaQueries';

const setShow = (show) => {
  if(show) {
    return `
      opacity: 1;
      transform: rotate(0);
    `
  }
}

const TitleContentBack = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  position: absolute;
  left: .5rem;
  top: .5rem;
  margin: 0 auto;
  opacity: 0;
  transform: rotate(90deg);
  transition: opacity 1s 1s ease-in, transform .5s 2s ease-out;

  @media (min-width: ${mq.sm}px) {
    bottom: 1rem;
    top: auto;
    left: 0;
    right: 0;
  }

  ${props => setShow(props.show)};
`

export default TitleContentBack;