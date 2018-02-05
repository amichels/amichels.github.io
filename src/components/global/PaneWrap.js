import styled from 'styled-components';

// configs
import mq from '../../configs/mediaQueries';

const PaneWrap = styled.section`
  box-sizing: border-box;
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;

  @media (min-width: ${mq.sm}px) {
    display: flex;
    transition: width 1s ease-in;
  }
`

export default PaneWrap;