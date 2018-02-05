import styled from 'styled-components';
import { Link } from 'react-router-dom';

// configs
import mq from '../../configs/mediaQueries';

const ContentNavItem = styled(Link)`
  
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 50%;

  @media (min-width: ${mq.sm}px) {
    flex: 1;
    padding-left: 0;
    padding-right: 0;
    width: auto;
  }
`

export default ContentNavItem;