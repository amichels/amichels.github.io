import styled from 'styled-components';

// configs
import colors from '../../configs/colors';

const setShow = (show) => {
  if(show) {
    return `
      opacity: 1;
    `
  }
}

const TitleContentHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: ${colors.purple};
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 1s .5s ease-in;

  ${props => setShow(props.show)};
`

export default TitleContentHeader;