import React from 'react'
import Rainbow from '../hoc/Rainbow';

const AboutUS = (props) => {
    setTimeout(() => {
        props.history.push('/Contact');
    }, 2000);
    return (
        <div className="container">
        <h4 className="center">AboutUS</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default Rainbow(AboutUS);
