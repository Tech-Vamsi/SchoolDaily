import React from 'react'
import {Link,useRouteMatch} from 'react-router-dom'
function SideMenu(props) {

    function SideBarItems(props){
        var linkItem="/teacher/"+props.MenuItem
        console.log(linkItem)
        return(
            <>
        <Link to={linkItem} className="w-full h-11 font-semibold hover:bg-blue-400 focus:bg-blue-300 text-black flex items-center justify-center">{props.MenuItem}</Link>
            </>
        );
    }
    return (
        <div className="w-24 h-full pt-40  flex flex-col items-center border-r-2 border-gray-400 justify-start gap-40">
        {props.MenuItem.map(item=>{
            return <SideBarItems MenuItem={item}/>
        })}
            
        </div>
    )
}

export default SideMenu
