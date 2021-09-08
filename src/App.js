import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import LandingPage from './Home/LandingPage'
import Navbar from './Components/Navbar/Navbar';
import HomeNav from './Data/HomeNav';
import SignUp from './Signup/SignUp';
import LeavesPage from './Teacher/Pages/LeavesPage/LeavesPage';
import Dashboard from './Teacher/Pages/Dashboard/Dashboard';
import ParentHome from '../src/Sandeep/components/pages/parents/parentHome'
import TeacherMainPage from './Teacher/TeacherMainPage';
import Leaves from './Teacher/Pages/LeavesPage/LeavesPage'
import Reports from './Sandeep/components/pages/reports'
//import Dashboard from './Teacher/Pages/Dashboard/Dashboard'
function App() {
  return (
    <div className="">
    <Router>
  <Switch>
    <Route path="/" exact component={LandingPage}></Route>
    <Route path="/teacher" exact component={TeacherMainPage}/>
    <Route path="/signup" exact component={SignUp}/>  
    <Route path="/parents" exact component={ParentHome} />
    <Route path="/reports" exact component={Reports}/>
  </Switch>
   {/* <LandingPage/> */}
   </Router>
    </div>
  );
}

export default App;
