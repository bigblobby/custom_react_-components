import React from 'react';
import { Link } from "react-router-dom";
import PillSelector from "../components/PillSelector";

export default class PillSelectorPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }


    render(){
        return (
            <div>
                <Link to={"/"} >Back</Link>
                <h1>Pill selector page</h1>
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
