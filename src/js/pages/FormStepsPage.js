import React from 'react';
import Steps from "../components/Steps";

class FormStepsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 1,
            total: 5
        }
    }

    prev = () => {
        if(this.state.current > 1) {
            this.setState(prevState => ({
                current: prevState.current - 1
            }));
        }
    };

    next = () => {
        if(this.state.current < this.state.total) {
            this.setState(prevState => ({
                current: prevState.current + 1
            }));
        }
    };

    render() {
        return (
            <div className="steps-page" style={{maxWidth: 700}}>
                <Steps
                    totalSteps={this.state.total}
                    currentStep={this.state.current}
                    showSteps={true}
                />

                <div>
                    <button onClick={this.prev}>Prev</button>
                    <button onClick={this.next}>Next</button>
                </div>
            </div>
        );
    }
}

export default FormStepsPage;
