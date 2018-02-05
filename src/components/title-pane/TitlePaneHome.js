import React from 'react';
import PropTypes from 'prop-types';

// components
import TitlePaneHeaders from './TitlePaneHeaders';
import TitleHeader from './TitleHeader';
import TitleSubheader from './TitleSubheader';

const TitlePaneHome = (props) => {
    return (
        <TitlePaneHeaders
            show={props.show}
        >
            <TitleHeader>Gabby Defonso</TitleHeader>
            <TitleSubheader>Art + Design</TitleSubheader>
        </TitlePaneHeaders>
    )
}

TitlePaneHome.propTypes = {
    show: PropTypes.bool.isRequired
}

export default TitlePaneHome;