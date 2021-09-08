import { Table } from "react-bootstrap"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../css_files/studentData.css"
import Report from "../../pages/reports"
import marks_data from "./marksData"
import { useState } from "react"
function ChildData(props) {
    const [quarter, setQuarter] = useState("first_quarter");
    const changeQuarter = (event) => {
        console.log("quarter about to change", event.target.value)
        setQuarter(event.target.value)
    }
    return (

        <div className="data">

            <Table className="student-data">
                {props.data.name == "student" && <tbody>
                    <tr>
                        <td className="attribute-name">{props.data.first_name[0]}</td>
                        <td className="details">{props.data.first_name[1]}</td>
                    </tr>
                    <tr>
                        <td className="attribute-name">{props.data.last_name[0]}</td>
                        <td className="details">{props.data.last_name[1]}</td>
                    </tr>
                    <tr>
                        <td className="attribute-name">{props.data.mobile_number[0]}</td>
                        <td className="details">{props.data.mobile_number[1]}</td>
                    </tr>
                    <tr>
                        <td className="attribute-name">{props.data.email_id[0]}</td>
                        <td className="details">{props.data.email_id[1]}</td>
                    </tr>
                </tbody>
                }
                {props.data.name == "fees" &&
                    <tbody>
                        <tr>
                            <td className="attribute-name">{props.data.first_quarter[0]}</td>
                            <td className="details">{props.data.first_quarter[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.second_quarter[0]}</td>
                            <td className="details">{props.data.second_quarter[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.third_quarter[0]}</td>
                            <td className="details">{props.data.third_quarter[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.fourth_quarter[0]}</td>
                            <td className="details">{props.data.fourth_quarter[1]}</td>
                        </tr>
                    </tbody>
                }
                {props.data.name == "leave" &&
                    <tbody>
                        <tr>
                            <td className="attribute-name">{props.data.new_application[0]}</td>
                            <td className="details">{props.data.new_application[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.update_application[0]}</td>
                            <td className="details">{props.data.update_application[1]}</td>
                        </tr>
                    </tbody>
                }
                {props.data.name == "reports" &&
                    <tbody>
                        <tr>
                            <td className="attribute-name">{props.data.student_details.name[0]}</td>
                            <td className="attribute-name">{props.data.student_details.name[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.student_details.rank[0]}</td>
                            <td className="attribute-name">{props.data.student_details.rank[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">
                                <select className="dropdown" name="quarter" onChange={(e) => changeQuarter(e)}>{props.data.first_quarter[0]}
                                    <option value="first_quarter" onClick={() => changeQuarter("first_quarter")}>First Quarter</option>
                                    <option value="second_quarter" onClick={() => changeQuarter("second_quarter")} > Second Quarter</option>
                                    <option value="half_yearly" onClick={() => changeQuarter("half_yearly")} > Half Yearly</option>
                                    <option value="third_quarter" onClick={() => changeQuarter("third_quarter")} > Third Quarter</option>
                                    <option value="fourth_quarter" onClick={() => changeQuarter("fourth_quarter")} > Fourth Quarter</option>
                                    <option value="final" onClick={() => changeQuarter("final")} > Final</option>
                                </select>
                            </td>
                            <td className="details"><Link to={{
                                pathname: "/reports",
                                params: { marks_data, quarter },
                            }}>view</Link></td>
                        </tr>
                    </tbody>
                }
                {props.data.name == "attendance" &&
                    <tbody>
                        <tr>
                            <td className="attribute-name">{props.data.total[0]}</td>
                            <td className="details">{props.data.total[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.attended[0]}</td>
                            <td className="details">{props.data.attended[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.attendance_percentage[0]}</td>
                            <td className="details">{props.data.attendance_percentage[1]}</td>
                        </tr>
                    </tbody>
                }
                {props.data.name == "notification" &&
                    <tbody>
                        <tr>
                            <td className="attribute-name">{props.data.discplinary_complains[0]}</td>
                            <td className="details">{props.data.discplinary_complains[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.attire_complains[0]}</td>
                            <td className="details">{props.data.attire_complains[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.hygiene_complains[0]}</td>
                            <td className="details">{props.data.hygiene_complains[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.miscellaneous_complains[0]}</td>
                            <td className="details">{props.data.miscellaneous_complains[1]}</td>
                        </tr>
                        <tr>
                            <td className="attribute-name">{props.data.total_complains[0]}</td>
                            <td className="details"><b>{props.data.total_complains[1]}</b></td>
                        </tr>
                    </tbody>
                }
            </Table>
        </div >

    )
}

export default ChildData