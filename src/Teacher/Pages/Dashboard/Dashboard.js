import React from 'react'

function Dashboard() {
    return (
        <div className="flex  w-full">
        <div className="h-52 w-1/2 m-20 rounded-lg border-2 border-black flex flex-col gap-3">
        
        <h2 className="font-bold text-3xl text-gray-500 ml-2 mt-2">Personal Information</h2>

        <div className="flex ml-5">
        <label className="font-semibold w-44">Name</label><label className="pl-10 font-normal">Vamsi Akula</label>
        </div>
        <div className="flex ml-5">
        <label className="font-semibold w-44">Phone Number</label><label className="pl-10 font-normal">9131541555</label>
       </div>
       <div className="flex ml-5">
        <label className="font-semibold w-44"> Email ID</label><label className="pl-10 font-normal">teacher@email.com</label>
        </div> <div className="flex ml-5">
        <label className="font-semibold w-44">Adhaar Card Number</label><label className="pl-10 font-normal">1234-XXXX-XXXX-XXXX</label>
        </div>
        </div>

        <div className="w-1/2 h-96 m-20 rounded-lg border-2 border-black flex flex-col gap-3">
        <h2 className="font-bold text-3xl text-gray-500 ml-2 mt-2">School Information</h2>
        <div className="flex ml-5">
        <label className="font-semibold w-44">School Name</label><label className="pl-10 font-normal">High School</label>
        </div>
        <div className="flex ml-5">
        <label className="font-semibold w-44">Phone Number</label><label className="pl-10 font-normal">9131541555</label>
        </div>
        <div className="flex ml-5">
        <label className="font-semibold w-44">Email ID</label><label className="pl-10 font-normal">school@email.com</label>
        </div>
        <div className="flex ml-5">
        <label className="font-semibold w-44">Designation</label><label className="pl-10 font-normal">teacher</label>
        </div>
        <div className="flex ml-5">
        <label className="font-semibold w-44">Role</label><label className="pl-10 font-normal">Class Techer</label>
        </div>
        <div className="flex ml-5">
        <label className="font-semibold w-44">Assigned Subjects</label><label className="pl-10 font-normal">Maths, Physics</label>
        </div>
        <div className="flex ml-5">
        <label className="font-semibold w-44">Assigned Classes</label><label className="pl-10 font-normal">6th, 8th, 10th</label>
        </div>
        </div>
        </div>
    )
}

export default Dashboard
