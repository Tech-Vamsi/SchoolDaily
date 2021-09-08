import { PROPERTY_TYPES } from '@babel/types'
import React,{useState} from 'react'
import Table from './Table'
function TabContainerList(props) {
        const [dataSource,updateDatasource]=useState(props.Lists[0])
    const selectedTab=(event)=>{
        console.log(event.target.value)
       props.Lists.forEach(item=>{
        if(event.target.value === item.ListTitle) 
        updateDatasource(item)
       })
    
        
    }
    return (
        <div className="w-screen h-14 m-32">
            <div className="font-semibold text-4xl">
                <label>Leaves</label>
            </div>
            <div className="w-full flex gap-5 items-center justify-start m-5">
            {props.Lists.map(item=>{
                return <button onClick={selectedTab} value={item.ListTitle} className="w-auto font-semibold border-b-4 rounded-xl border-white focus:border-red-400 text-2xl">{item.ListTitle}</button>
            })}
            </div>
            <div className="border-4 border-black w-max p-10 h-96 rounded-3xl overflow-hidden overflow-y-auto">
            <Table List={dataSource}/>
            </div>
        </div>
    )
}

export default TabContainerList
