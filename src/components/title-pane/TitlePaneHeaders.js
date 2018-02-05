import styled from 'styled-components';

const setShow = (show) => {
  if(show) {
    return `
      opacity: 1;
    `
  }
}

const TitlePaneHeaders = styled.div`
  text-align: center;
  padding: 0 1rem;
  opacity: 0;
  transition: opacity 1s ease-in;
  z-index: 200;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${props => setShow(props.show)};
`

export default TitlePaneHeaders;