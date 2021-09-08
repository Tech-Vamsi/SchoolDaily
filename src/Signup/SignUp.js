import React from 'react'

function SignUp() {

    function FormControl(props){
        return(

            <div className="flex flex-col gap-3">
            <label className="">{props.title}</label>
            <input type="text" className="border-4 border-blue-700 rounded-full py-3 px-6 inset-10 ..." />
            </div>
        );
    }
    return (
        <div  className="w-full h-screen flex  flex-row items-center justify-center ">
         <div className=" z-0 bg-yellow-100 w-full h-screen absolute" /> 
            <form className="flex flex-col border-4 border-blue-500 rounded-xl gap-2 w-96 h-96 items-center justify-center font-semibold text-2xl z-1 absolute">
            <FormControl title={"Unique ID"}/>
            <FormControl  title={"Password"}/>

            </form>
         
        </div>
    )
}

export default SignUp
