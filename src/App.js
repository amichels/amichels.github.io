import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { injectGlobal } from 'styled-components';

// components
import GlobalStyles from './components/global/GlobalStyles';
import Container from './components/global/Container.js';
import TitlePane from './components/title-pane/TitlePane.js';
import ContentPane from './components/content-pane/ContentPane.js';

const App = () => {
  return (
    <Router>
      <Container>
        <TitlePane />
        <ContentPane />
      </Container>
    </Router>
  )
}

export default App;