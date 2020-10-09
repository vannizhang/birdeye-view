import React from 'react';
import FooterTitleImage from '../../statics/FooterTitle.png';

const Footer = () => {
    return (
        <a href="https://www.loc.gov/resource/g3742w.ct005519/?r=0.029,-0.096,0.772,1.256,90" target="_blank">
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
        </a>

    )
}

export default Footer
