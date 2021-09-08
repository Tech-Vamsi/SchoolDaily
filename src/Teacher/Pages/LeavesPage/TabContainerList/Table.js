import React from 'react'

function Table(props) {
    var List=props.List;
    function ListItem(props){
        if(props.title==="LeaveApprovals")
        return(
            <div className="flex gap-5 mb-3 items-center pl-5 pr-5 h-14 text-lg border-yellow-400 border-4 rounded-lg">
            <label className="w-60 font-semibold">Student Name:<span className="ml-2 font-normal">{props.details.StudentName}</span></label>
            <label className="w-40 font-semibold">Standard: <span className="ml-2 font-normal">{props.details.Standard}</span></label>
            <label className="w-24 font-semibold">Section:  <span className="ml-2 font-normal">{props.details.Section}</span></label>
            <label className="w-20 font-semibold">Days: <span className="ml-2 font-normal">10</span></label>
            <label className="w-60 font-semibold">Leave Type: <span className="ml-2 font-normal">{props.details.LeaveType}</span></label>
            <label className="w-52 font-semibold">Start Date: <span className="ml-2 font-normal">{props.details.StartDate}</span></label>
            <label className="w-52 font-semibold">End Date: <span className="ml-2 font-normal">{props.details.EndDate}</span></label>
            <div><button className="text-white  h-9 ring-2 bg-green-700 ring-green-600 rounded-l-xl mr-1">Approve</button><button className="text-white h-9  bg-red-700 ring-2 ring-red-600 rounded-r-xl">Decline</button></div>
            </div>
            
        );

        return(
            <div className="flex gap-5 mb-3 items-center pl-5 pr-5 h-14 text-lg border-yellow-400 border-4 rounded-lg">
            <label className="w-60 font-semibold">Leave Type:<span className="ml-2 font-normal">{props.details.LeaveType}</span></label>
             <label className="w-20 font-semibold">Days:<span className="ml-2 font-normal">10</span></label>
             <label className="w-60 font-semibold">Start Date:<span className="ml-2 font-normal">{props.details.StartDate}</span></label>
             <label className="w-60 font-semibold">End Date:<span className="ml-2 font-normal">{props.details.EndDate}</span></label>
             <label className="w-60 font-semibold">status:<span className="ml-2 font-normal">pending</span></label>
             </div>
        );
    }
   
    

 
    return (
      
         <div className="flex flex-col w-max">
            {/* <TableHeader List={props.List}/>*/}
                   
            {props.List.data.map(item=>{
                return <ListItem details={item} title={props.List.ListTitle}/>
            })} 
            
         </div>   
        
    )
}

export default Table
