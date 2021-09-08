import React from 'react'
import "../css_files/prodDescription.css"
import header from '../../../images/header.svg'


function ProdDescription() {
    return (
        <div>
            < div className="content" >
                <div className="info">
                    <p>Providing the best way for<br></br>School Management</p>
                </div>
                <img src={header} alt="Header logo" className="prod-description" />
            </div>
        </div >
    )
}

export default ProdDescription
