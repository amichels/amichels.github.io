import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// components
import TitlePaneWrap from './TitlePaneWrap';
import TitlePaneHome from './TitlePaneHome';
import TitlePaneContent from './TitlePaneContent';

// Configs
import paths from '../../configs/paths';
import content from '../../configs/content';

class TitlePane extends React.Component {
  constructor(props){
    super(props);

    this.props.history.listen((location, action) => {
      const url = location.pathname;
      this.checkRouteAnimations(url);
    });

    this.state = {
      showHeaders: false,
      paneActive: true,
      showContentHeaders: false,
      showContentTitle: false,
      showContentBack: false
    };
  }

  checkRouteAnimations(url) {
    const home = url === paths.home;

    this.homeAnimations(home);
  }

  homeAnimations(home) {
    this.activatePane(home);
    this.showHeaders(home);
  }

  activatePane(active) {
    this.setState({paneActive: active});
  }

  showHeaders(show) {
    setTimeout(() => {
      this.setState({showHeaders: show});
      this.showContentHeaders(!show);
    }, 1); // 1 is to make sure the css transitions run on react component render
  }

  showContentHeaders(show) {
    this.setState({showContentHeaders: show});
    this.showContentTitle(show);
    this.showContentBack(show);
  }

  showContentBack(show) {
    this.setState({showContentBack: show});
  }

  showContentTitle(show) {
    this.setState({showContentTitle: show});
  }

  render() {
    return (
      <TitlePaneWrap
        active={this.state.paneActive}
      >
        <Switch>
          <Route exact path={paths.home}
            render={() =>
              <TitlePaneHome
                show={this.state.showHeaders}
              />
            }
          />
          {Object.keys(content).map((key) => {
              return (
                <Route key={key} exact path={content[key].path}
                  render={() =>
                    <TitlePaneContent
                      show={this.state.showContentHeaders}
                      title={content[key].title}
                      icon={content[key].icon}
                      showBack={this.state.showContentBack}
                      showTitle={this.state.showContentTitle}
                    />
                  }
                />   
              )
          })}
        </Switch>
      </TitlePaneWrap>
    )
  }

  componentDidMount() {
    const url = this.props.location.pathname;
    this.checkRouteAnimations(url);
  }
}

export default withRouter(TitlePane);