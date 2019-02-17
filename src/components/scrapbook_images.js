import React from 'react';

export default (props) => {
    //console.log('scrapbook images props:', props);
    const src = props.about.src;
    const style = props.about.style;
    return (
        <img src={src} className='scrapbook-image' style={style}/>
    );
};