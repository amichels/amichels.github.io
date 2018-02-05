import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import TitlePaneHeaders from './TitlePaneHeaders';
import TitleContentHeader from './TitleContentHeader';
import TitleContentIcon from './TitleContentIcon';
import TitleContentBack from './TitleContentBack';

// Icons
import BackArrow from '../../images/icons/BackArrow';

// Configs
import paths from '../../configs/paths';

const TitlePaneContent = (props) => {
  return (
    <TitlePaneHeaders
        show={props.show}
    >
      <TitleContentIcon>
        {props.icon}
      </TitleContentIcon>
      <TitleContentHeader
        show={props.showTitle}
      >
        {props.title}
      </TitleContentHeader>
      <TitleContentBack
        show={props.showBack}
      >
        <Link to={paths.home}>
          <BackArrow />
        </Link>
      </TitleContentBack>
    </TitlePaneHeaders>
  )
}

TitlePaneContent.propTypes = {
  show: PropTypes.bool.isRequired,
  showBack: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
}

export default TitlePaneContent;