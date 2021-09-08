import React, { useState } from 'react'
import parentFeatureSet from '../../features/js_files/parentFeatureData'
import ParentFeatureCard from '../../features/js_files/parentFeatureCard'
import ChildData from '../../features/js_files/childData'
import './parentHome.css'
import dancinglogo from '../../../images/dancing.svg'
import Fees from '../../features/js_files/fees'
import data from '../../features/js_files/data'
import { Link } from 'react-router-dom'
function ParentHome() {
    const [show, setShow] = useState(data.student);
    const changeShowData = (newData) => {
        console.log("state has been updated", newData, show.name == "student")
        setShow(newData);
    }

    return (
        <div className="parents">
            <div className="parents_feature">
                <ParentFeatureCard name="leave" image={parentFeatureSet.leave.image} alt={parentFeatureSet.leave.alt} title={parentFeatureSet.leave.title} id="leave-logo" changeShowData={changeShowData} data={data.leave} />
                <ParentFeatureCard name="fees" image={parentFeatureSet.fees.image} alt={parentFeatureSet.fees.alt} title={parentFeatureSet.fees.title} id="fee-logo" changeShowData={changeShowData} data={data.fees} />
                <ParentFeatureCard name="reports" image={parentFeatureSet.reports.image} alt={parentFeatureSet.reports.alt} title={parentFeatureSet.reports.title} id="report-logo" changeShowData={changeShowData} data={data.reports} />
                <ParentFeatureCard name="attendance" image={parentFeatureSet.attendance.image} alt={parentFeatureSet.attendance.alt} title={parentFeatureSet.attendance.title} id="attendance-logo" changeShowData={changeShowData} data={data.attendance} />
                <ParentFeatureCard name="notification" image={parentFeatureSet.notification.image} alt={parentFeatureSet.notification.alt} title={parentFeatureSet.notification.title} id="notification-logo" changeShowData={changeShowData} data={data.notification} />
            </div>
            <div className="parents-feature-homescreen">
                <div className="parents_user-details">
                    <p className="parents_user-details_welcome" onClick={() => changeShowData(data.student)}>Welcome User
                        <span className="hover-object">Click to view details</span>
                    </p>
                </div>
                <div className="parents-child_data">
                    <ChildData data={show}></ChildData>
                </div>
            </div>
            <div className="parents-feature-free_space">
                <div className="dancing">
                    <img src={dancinglogo} alt="dancing-logo" className="dancing-logo"></img>
                </div>
            </div>
        </div>
    )
}
export default ParentHome