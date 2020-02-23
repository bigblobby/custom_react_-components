import React from 'react';
import {withAccordionContext} from "./WithAccordionContext";

class Row extends React.Component{
    static defaultProps = {
        activeClassname: 'active'
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            activeClassname: props.activeClassname
        }
    }

    componentDidMount(){
        this.checkIsActive();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.context.activeID !== this.props.context.activeID) {
            this.checkIsActive();
        }
    }

    checkIsActive = () => {
        if(this.props.context.multiple) {
            if(this.props.context.activeID.indexOf(this.props.id) !== -1) {
                this.setState({ isActive: true });
            } else {
                this.setState({ isActive: false });
            }
        } else {
            if(this.props.id == this.props.context.activeID) {
                this.setState({ isActive: true });
            } else {
                this.setState({ isActive: false });
            }
        }
    };


    render(){
        const {isActive, activeClassname} = this.state;

        return (
            <div
                className={"accordion-row " + (isActive ? activeClassname : '')}
                aria-expanded={this.state.isActive? "true" : "false"}
            >
                {this.props.children}
            </div>
        )
    }
}

export default withAccordionContext(Row);
