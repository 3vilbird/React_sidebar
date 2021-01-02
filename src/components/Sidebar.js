import React from 'react';
import '../App.css';
import { SidebarItems } from './SidebarItems';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                {

                    SidebarItems.map((item, idx) => (
                        <li key={idx}
                            className="row"
                            id={window.location.pathname === item.link ? "active" : ""}
                            onClick={() => { window.location.pathname = item.link }} >
                            <div id="icon" >{item.icon} </div>
                            <div id="title">{item.title}</div>
                        </li>


                    ))


                }
            </ul>

        </div>
    );
}

export default Sidebar;