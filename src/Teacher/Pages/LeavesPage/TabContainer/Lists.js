import React,{useState} from 'react'
import "./ListItem.css";
//import ListItem from '../ListItem/ListItem'

function Lists(props) {
  function ListItem(props) {
const [open,Visibility]=useState(false);
const UpdateState=()=>{
  Visibility(!open);
}
    var days=props.days>1?'days':"day";
    return (
      <div>
        <div className={`list_item_container ${open?'active':''}`} onClick={UpdateState}>
        <div className="upper">
          <label className="leave_labels">Leave Type<span>{props.leaveType}</span></label>
          <label className="leave_labels">{days}<span>{props.days} </span> </label>
        <label className="leave_labels">Start Date <span>{props.startDate}</span></label>
        <label className="leave_labels">End Date <span>{props.endDate}</span></label>
       <label className={`leave_status ${props.status} leave_labels`}>{props.status}</label>
        </div>
        {/* <div className="lower"> */}
        <article>Reason:<span>{props.reason}</span>
        </article> 
    {  /*</div>*/} 
        </div>     </div>
    );
  }
    return (
        <>
        {props.List.map((item)=>{
          return   <ListItem leaveType={item.leaveType} status={item.status} days={item.days} reason={item.reason} startDate={item.startDate} endDate={item.endDate} />
        })}
      </> 
    )
}

export default Lists
