import React from 'react';
import { Link } from "react-router-dom";
import Select from "../components/Select";

export default class SelectorPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }


    render(){
        return (
            <div>
                <Link to={"/"} >Back</Link>
                <h1>Selector page</h1>
                <div className="select-container">
                    <Select
                        options={this.state.selectOptions}
                        label={"Select a car"}
                        placeholder={"Pick one"}
                        updater={this.handleSelect}
                        multiple
                    />
                </div>
            </div>
        )
    }
}
