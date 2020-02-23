import React from 'react';
import Select from "../components/Select";
import PillSelector from "../components/PillSelector";

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

export default class Homepage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectOptions: SELECT_OPTIONS,
            selectedValue: null,
            pillValue: null
        }
    }

    handleSelect = (value) => {
        this.setState({
            selectedValue: value
        })
    };

    handlePillSelect = (stateName, value) => {
        this.setState({
            [stateName]: value
        })
    };


    render(){
        return (
            <div>
                <h1>Homepage</h1>
                <div className="select-container">
                    <Select
                        options={this.state.selectOptions}
                        label={"Select a car"}
                        placeholder={"Pick one"}
                        updater={this.handleSelect}
                        multiple
                    />
                </div>
                <div className="pill-container">
                    <PillSelector
                        stateName={'pillValue'}
                        title="Initial rental (months)"
                        options={['All', '1', '3', '6', '9', '12']}
                        initialValue={'9'}
                        setOption={this.handlePillSelect}
                    />
                </div>
            </div>
        )
    }
}
