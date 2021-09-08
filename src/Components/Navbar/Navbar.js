import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar(props) {

    function NavBarItems(props){
        return (
<>
 <Link href={props.href} >{props.title}</Link>   
</>
        );
    }
    return (
        <div className="flex items-center justify-evenly w-full"> 
        <div className="text-6xl w-full font-semibold text-white  mt-5 ml-5">
    <h1>SchoolDaily</h1>
        </div>
        <div className="flex w-full text-2xl font-semibold text-white justify-evenly"> {/*nb-itms */}
{props.List.map(item=>{
    return <NavBarItems href={item.href} title={item.title}/>
})}
        </div>            
        </div>
    )
}

export default Navbar
