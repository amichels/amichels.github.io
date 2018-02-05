import styled from 'styled-components';

// configs
import mq from '../../configs/mediaQueries';

const setShow = (show) => {
  if(show) {
    return `
      opacity: 1;
    `
  }
}

const ContentNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 3rem;
  opacity: 0;
  transition: opacity 1s 1.5s ease-in;

  @media (min-width: ${mq.xs}px) {
    flex-wrap: nowrap;
  }

  @media (min-width: ${mq.sm}px) {
    width: 18vw;
    height: 100vh;
    flex-direction: column;
  }

  ${props => setShow(props.show)};
`

export default ContentNav;