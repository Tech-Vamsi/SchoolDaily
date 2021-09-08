import React from 'react'
import TeacherMenu from '../Data/TeacherMenu'
import CustomNavbar from './CustomNavbar'
import SideMenu from './SideMenu'
import {BrowserRouter as Router,Route,Switch,useRouteMatch,useParams} from 'react-router-dom'
import Leaves from './Pages/LeavesPage/LeavesPage'
import Dashboard from './Pages/Dashboard/Dashboard'
function TeacherMainPage() {
    let {path}=useParams();
    return (
        <div className="w-full">
        <div>
        <CustomNavbar/>
        </div><Router>
        <div className="flex">
        <div className="h-full">
        <SideMenu MenuItem={TeacherMenu}/>
        </div>
        <Switch>
            <Route path={"/teacher/Dashboard"} exact component={Dashboard}/>
           <Route path={"/teacher/Leaves"} exact component={Leaves}/>  
            </Switch>
    
            </div>
        </Router>
        </div>
    )
}

export default TeacherMainPage
