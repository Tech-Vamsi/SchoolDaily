import React from 'react'
import { useState } from 'react';
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';
import { useLocation, useParams } from 'react-router-dom';
import './css_files/reports.css'
const data = {
    labels: ['Maths', 'Physics', 'Chemistry', 'Information Technology', 'English'],
    datasets: [
        {
            label: 'Student',
            data: [
                97,
                80,
                93,
                85,
                90
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ]
        }
    ]
}

function Report(props) {

    const [quarter, setQuarter] = useState("first_quarter");
    const changeQuarter = (event) => {
        console.log("quarter about to change", event.target.value)
        setQuarter(event.target.value)
    }
    const [graphType, setgraphType] = useState("bar")
    const { params } = useLocation();
  //  console.log(params["marks_data"][quarter])

    data["datasets"][0]["data"] = [
        params["marks_data"][quarter]["maths"][1],
        params["marks_data"][quarter]["physics"][1],
        params["marks_data"][quarter]["chemistry"][1],
        params["marks_data"][quarter]["information"][1],
        params["marks_data"][quarter]["english"][1],
    ]
    const changeGraphType = (event) => {
        setgraphType(event.target.value);
    }
    return (
        <div className="reports">
            <div className="reports-graph">
                {graphType == "bar" &&
                    <Bar
                        data={data}
                        options={{
                            title: {
                                display: true,
                                text: 'Marks in different subjects',
                                fontSize: 25
                            },
                            maintainAspectRatio: false
                        }}
                    />}
                {graphType == "pie" &&
                    < Pie
                        data={data}
                        options={
                            {
                                title: {
                                    // display: true,
                                    text: 'Marks in different subjects',
                                    fontSize: 25
                                },
                                maintainAspectRatio: false
                            }
                        }
                    />}
                {graphType == "doughnut" &&
                    < Doughnut
                        data={data}
                        options={
                            {
                                title: {
                                    // display: true,
                                    text: 'Marks in different subjects',
                                    fontSize: 25,
                                }, maintainAspectRatio: false
                            }
                        }
                    />}
                {graphType == "line" &&
                    < Line
                        data={data}
                        options={
                            {
                                title: {
                                    // display: true,
                                    text: 'Marks in different subjects',
                                    fontSize: 25,
                                }, maintainAspectRatio: false
                            }
                        }
                    />}
            </div>
            <div className="reports-option">

                <select className="dropdown" onChange={(e) => changeGraphType(e)}>Line
                    <option value="line">Line</option>
                    <option value="pie">Pie</option>
                    <option value="doughnut">Doughnut</option>
                    <option value="bar">Bar</option>
                </select>
                <select className="dropdown" name="quarter" onChange={(e) => changeQuarter(e)}>First
                    <option value="first_quarter" onClick={() => changeQuarter("first_quarter")}>First Quarter</option>
                    <option value="second_quarter" onClick={() => changeQuarter("second_quarter")} > Second Quarter</option>
                    <option value="half_yearly" onClick={() => changeQuarter("half_yearly")} > Half Yearly</option>
                    <option value="third_quarter" onClick={() => changeQuarter("third_quarter")} > Third Quarter</option>
                    <option value="fourth_quarter" onClick={() => changeQuarter("fourth_quarter")} > Fourth Quarter</option>
                    <option value="final" onClick={() => changeQuarter("final")} > Final</option>
                </select>
            </div>
        </div>
    )
}

export default Report