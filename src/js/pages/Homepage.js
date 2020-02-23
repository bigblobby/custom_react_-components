import React from "react";
import {NavLink} from "react-router-dom";

export default class Homepage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div>
                <h1>Homepage</h1>
                <ul className="nav">
                    <li><NavLink to={"accordion"}>Accordion</NavLink></li>
                    <li><NavLink to={"pill"}>Pill selector</NavLink></li>
                    <li><NavLink to={"selector"}>Selector</NavLink></li>
                </ul>
            </div>
        )
    }
}
