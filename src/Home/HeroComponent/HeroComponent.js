import React from 'react'


function HeroComponent(props) {
    return (
        <div className="flex  items-start justify-center w-fit h-auto mt-20 ml-20 mr-20 ">
        <div className="z-0"></div>
        <article className="flex flex-col z-2">
            <label className="text-6xl font-bold">{props.title}</label>
            <p className="text-4xl m-4 font-normal ">
             {props.text}
            </p>
          </article>
            <img src={props.path} className="w-1/2 z-1 "/>
        </div>
    )
}

export default HeroComponent
