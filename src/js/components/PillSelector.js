import React from "react";

export default class PillSelector extends React.Component {
    static defaultProps = {
        title: '',
        initialValue: '',
        stateName: '',
        options: [],
        setOption: () => {}
    };

    constructor(props){
        super(props);

        this.state = {
            position: 0,
            value: this.props.initialValue
        };

        this.handleClick = this.handleClick.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }

    componentDidMount(){
        if(this.props.initialValue){
            this.setPosition(this.props.initialValue, false)
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.initialValue !== prevProps.initialValue){
            this.setState({
                value: this.props.initialValue
            }, () => this.setPosition(this.state.value));
        }
    }

    setPosition(value, shouldParentStateUpdate = true){
        const position = (100 / this.props.options.length) * this.props.options.indexOf(value);

        if(shouldParentStateUpdate){
            this.setState({
                position: position
            }, () => {
                this.props.setOption(this.props.stateName, value);
            });
        } else {
            this.setState({position: position});
        }
    }

    handleClick(e){
        const value = e.target.dataset.value;
        if(value){
            this.setState({value: value});
            this.setPosition(value)
        }
    }

    render(){
        const selectorWidth = (100 / this.props.options.length) + '%';
        const position = this.state.position + '%';
        const {className} = this.props;

        return(
            <div className={"pill-selector " + (className ? className : '')}>
                <h4>{this.props.title}</h4>
                <div className="options" onClick={this.handleClick}>
                    <div className="selector" style={{width: selectorWidth, left: position}}></div>
                    {
                        this.props.options.map(option => {
                            return(
                                <span className={(this.state.value === option ? 'active' : '')} key={option} data-value={option}>{option}</span>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
