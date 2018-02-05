import styled from 'styled-components';

// configs
import mq from '../../configs/mediaQueries';

// configs
import colors from '../../configs/colors';

const TitleHeader = styled.h1`
  font-size: 2rem;
  margin: 0 0 .5rem 0;
  color: ${colors.purple};
  text-transform: uppercase;

  @media (min-width: ${mq.sm}px) {
    font-size: 3rem;
  }
`

export default TitleHeader;