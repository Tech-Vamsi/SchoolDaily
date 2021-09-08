import React from 'react'


function LeaveForm(props) {

    const applyLeave=(event)=>{

        event.preventDefault();
        const data={
            
        }
    }
    return (
        <>
         <button onClick={props.onClose} className="mr-96 min-w-full text-xl font-semibold ring-4 rounded-xl ring-red-600 hover:bg-red-400 hover:text-white">X</button>
         <div>
         <form  onSubmit={applyLeave} className="flex  h-full w-full ">
        <div className="flex flex-col w-full font-semibold items-center justify-center gap-16">
            <label>Start Date</label>
            <label>End Date</label>
            {/* <label></label> */}
            <label>Leave Type</label>
        </div>
        <div className="flex flex-col h-full items-center justify-center gap-16">
        <input type="date" />
        <input type="Date" />
        <select className="w-full font-semibold ">
          <option className="font-semibold" value='Cold'>Cold</option>
          <option className="font-semibold" value='Fever'>Fever</option>
          <option  className="font-semibold" value='Headache'>Headache</option>
        </select>

        </div>
        
        </form>
        <button className="ml-28 mt-16 w-40 text-xl font-semibold ring-4 rounded-xl ring-blue-600 hover:bg-blue-400 hover:text-white" type="submit">Submit</button>
        </div>

        </>
    )
}

export default LeaveForm
