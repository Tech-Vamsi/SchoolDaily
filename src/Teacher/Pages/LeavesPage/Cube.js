import React from 'react'

function Cube(props) {
    return (
        <div className="flex flex-col border-4 border-red-500 bg-red-700 text-white font-semibold items-center justify-center gap-6">
        <label>{props.title}</label>
        <label>{props.details}</label>
        </div>
    )
}

export default Cube
