import React, { useState, useRef } from "react";
import Lists from "./Lists";
import "./TabContainer.css";
function TabContainer(props) {
  const [selectedTab, updateSelection] = useState(props.tabs[0].Title);
  const [dataSource, updateDataSource] = useState(props.tabs[0].data);
  const title = useRef("");
  const viewUpdate = (event) => {
    console.log(event.target.value);
    props.tabs.forEach((ele) => {
      if (event.target.value === ele.Title) {
        updateSelection(ele.Title);
        updateDataSource(ele.data);
      }
    });
  };
  return (
    <div className="tab_container">
      <h2>Leave Requests/Approvals</h2>
      <div className="tabs">
        {props.tabs.map((item) => {
          return (
            <button
              ref={title}
              onClick={viewUpdate}
              value={item.Title}
              className={selectedTab == item.Title ? "active" : ""}
            >
              {item.Title}
            </button>
          );
        })}
      </div>
      <div className="data_list">
        <Lists List={dataSource} />
      </div>
    </div>
  );
}

export default TabContainer;
