import React from 'react'
import { useState } from 'react';
import "../css_files/featureDescription.css"

function FeatureDescription(props) {
    const [zigzag, setZigZag] = useState(false);
    const changeState = () => {
        if (zigzag == false) { setZigZag(true); }
        else { setZigZag(true); }
    }
    return (
        <div>
            {props.name == "track-performance" ?
                <div className="hero-content-false" onClick={() => console.log(props.name)} >
                    <img className="hero-img-false" src={props.path} alt="svg" />
                    <div className="hero-content-text-false">
                        <h1 className="hero-content-title-false">{props.title}</h1>
                        <p className="hero-content-desc-false">{props.text}</p>
                    </div>
                </div> :
                <div className="hero-content" onClick={() => console.log(props.name)} >
                    <div className="hero-content-text">
                        <h1 className="hero-content-title">{props.title}</h1>
                        <p className="hero-content-desc">{props.text}</p>
                    </div>
                    <img className="hero-img" src={props.path} alt="svg" />
                </div>
            }
        </div>

    )
}

export default FeatureDescription
