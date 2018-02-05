import styled from 'styled-components';

// configs
import mq from '../../configs/mediaQueries';

const Container = styled.div`
  @media (min-width: ${mq.sm}px) {
    display: flex;
  }
`

export default Container;