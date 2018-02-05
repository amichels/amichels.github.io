import PaneWrap from '../global/PaneWrap';

// configs
import colors from '../../configs/colors';
import mq from '../../configs/mediaQueries';

const setActiveStyles = (active) => {
  if(active) {
    return `
      background-color: ${colors.salmon};
      height: 100%;

      @media (min-width: ${mq.xs}px) {
        height: 100%;
      }

      @media (min-width: ${mq.sm}px) {
        width: 60%;
        height: 100vh;
        overflow-y: scroll;
      }
    `
  }
}

const ContentPaneWrap = PaneWrap.extend`
  background-color: white;
  transition: background-color 1s ease-in, width 1s ease-in;
  min-height: 66.66667vh;

  @media (min-width: ${mq.xs}px) {
    height: 30vh;
    min-height: auto;
  }

  @media (min-width: ${mq.sm}px) {
    width: 40%;
    height: 100vh;
  }

  ${props => setActiveStyles(props.active)};
`

export default ContentPaneWrap;