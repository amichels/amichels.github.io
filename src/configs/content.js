import React from 'react';

// Components
import ContentImages from '../components/content-pane/ContentImages';
import ContentAbout from '../components/content-pane/ContentAbout';

// Icons
import CameraIcon from '../images/icons/Camera.js';
import HandIcon from '../images/icons/Hand.js';
import MouseIcon from '../images/icons/Mouse.js';
import PencilIcon from '../images/icons/Pencil.js';

// Images
import artImages from './images/art.js'
import photoImages from './images/photo.js'
import designImages from './images/design.js'

// Configs
import paths from './paths';

const content = {
    art: {
        path: paths.art,
        title: 'Art',
        icon: <PencilIcon />,
        content: <ContentImages images={artImages}/>
    },
    photo: {
        path: paths.photo,
        title: 'Product Photography',
        icon: <CameraIcon />,
        content: <ContentImages images={photoImages}/>
    },
    design: {
        path: paths.design,
        title: 'Design',
        icon: <MouseIcon />,
        content: <ContentImages images={designImages}/>
    },
    about: {
        path: paths.about,
        title: 'About',
        icon: <HandIcon />,
        content: <ContentAbout/>
    }
}

export default content;