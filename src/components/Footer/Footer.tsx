import React from 'react';
import FooterTitleImage from '../../statics/FooterTitle.png';

const Footer = () => {
    return (
        <img 
        style={{
            position: 'absolute',
            width: '100%',
            // height: '100%',
            left: 0,
            bottom: 0
        }}
        src={FooterTitleImage} 
    />
    )
}

export default Footer
