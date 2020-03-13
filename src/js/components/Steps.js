import React from 'react';

class Steps extends React.Component {
    static defaultProps = {
        currentStep: 1,
        totalSteps: 5,
        showSteps: true
    };

    render() {
        const {currentStep, totalSteps} = this.props;

        return (
            <div className="steps-container">
                <div className="steps-inner">
                    <div className="step-rail"></div>
                    <div className="steps">
                        {
                            Array(this.props.totalSteps).fill(0).map((step, index) => {
                                return <div className={"step " + ((index + 1) === currentStep ? 'current ' : ' ') + ((index + 1) < currentStep ? 'completed' : '') }></div>
                            })
                        }
                    </div>
                </div>
                {
                    this.props.showSteps && (
                        <div className="steps-label">
                            <span className="label">Step {currentStep} of {totalSteps}</span>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Steps;
