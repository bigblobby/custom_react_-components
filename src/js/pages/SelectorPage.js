import React from "react";
import { Link } from "react-router-dom";
import Select from "../components/Select";

let SELECT_OPTIONS = [
    {
        value: 1,
        description: 'Volvo'
    },
    {
        value: 2,
        description: 'Saab'
    },
    {
        value: 3,
        description: 'Ford'
    },
    {
        value: 4,
        description: 'Volkeswagon'
    },
];

export default class SelectorPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectOptions: SELECT_OPTIONS,
            selectedValue: null,
        }
    }

    handleSelect = (value) => {
        this.setState({
            selectedValue: value
        })
    };

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
