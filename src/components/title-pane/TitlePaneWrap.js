import PaneWrap from '../global/PaneWrap';

// Configs
import colors from '../../configs/colors';
import mq from '../../configs/mediaQueries';

const setActiveStyles = (active) => {
  if(!active) {
    return `
      z-index: 100;

      @media (min-width: ${mq.xs}px) {
        height: 40vh;
      }

      @media (min-width: ${mq.sm}px) {
        width: 40%;
        height: 100vh;
      }

      &:before {
        opacity: 1;
      }
    `
  }
}

const TitlePaneWrap = PaneWrap.extend`
  background: linear-gradient(to bottom, ${colors.pink} 1%, ${colors.yellow} 100%);
  transition: width: 1s ease-in;
  height: 40vh;
  display: flex;

  @media (min-width: ${mq.xs}px) {
    height: 70vh;
  }

  @media (min-width: ${mq.sm}px) {
    width: 60%;
    height: 100vh;
  }

  &:before {
    content: ' ';
    display: block;
    background-color: white;
    opacity: 0;
    transition: opacity 1s 1s ease-in;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }

  ${props => setActiveStyles(props.active)};
`

export default TitlePaneWrap;
