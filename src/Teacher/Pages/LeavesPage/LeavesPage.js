import React,{useState} from 'react'
import Modal from '../../../Components/Modal'
import LeaveForm from './LeaveForm'
import Cube from './Cube'
import TabContainerList from '../LeavesPage/TabContainerList/TabContainerList'
import LR from '../../../Data/LeaveRequest'
import LA from '../../../Data/LeaveApprovals'

function LeavesPage(props) {

    const [addLR,updateLRList]=useState(LR)
    const [visiblity,UpdateVisibility]=useState(true)
const onModalHandler=()=>{
    UpdateVisibility(!visiblity)
}
    const openModal=()=>{
    UpdateVisibility(!visiblity)    
    }
    const newLeave=(leave)=>{
        addLR.data.push(leave);
        updateLRList(addLR);
    }
    return (
        <div className="w-full">
        <div className="flex flex-row items-center justify-start gap-32  h-28 ">
        <Modal isOpen={visiblity}>
        <div className=" w-full h-auto flex flex-col gap-20 text-black p-8">
        <LeaveForm isOpen={visiblity} onClose={onModalHandler} onLeaveRecieved={newLeave}/>
        
        </div>
    </Modal>
    <div className="flex gap-10 items-center w-full">
      <div className="flex flex-col border-4 border-red-400  text-black font-semibold items-center justify-center gap-2 w-60 h-16 rounded-2xl ml-28">
        <label>Casual Leaves</label>
        <label>54</label>
        </div>
        <div className="flex flex-col border-4 border-green-700 text-black font-semibold items-center justify-center gap-2  w-60 h-16 rounded-2xl">
        <label>Sick Leaves</label>
        <label>54</label>
        </div>
        <button onClick={openModal} className="font-semibold justify-self-end text-lg w-36 h-8  rounded-2xl ring-2 ring-blue-900 hover:bg-blue-300 ">Apply Leave</button>
        </div>
        </div>
    <TabContainerList Lists={[addLR,LA]} />
        </div>
        
    )
}

export default LeavesPage
