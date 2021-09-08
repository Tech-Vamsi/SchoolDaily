import React from 'react'
import ReactDom  from 'react-dom';

function Modal(props) {
    if(props.isOpen)
    return null
    return ReactDom.createPortal(
    <>
    <div className="z-20 backdrop-filter backdrop-blur-lg  w-full h-full  fixed top-0 left-0 "></div>
     <div className="z-50 w-96 h-1/2 fixed top-1/3 left-1/2 border-8 rounded-3xl bg-white"> 
     {props.children}
    </div> 
        </>,
         
         document.getElementById("portal")
            )
} 

export default Modal;
