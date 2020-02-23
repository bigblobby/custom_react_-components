import React from "react";
import {withAccordionContext} from "./WithAccordionContext";

class Collapse extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            height: 0
        };

        this.content = React.createRef();
    }

    componentDidMount(){
        this.handleExpand();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.context.activeID !== this.props.context.activeID){
            this.handleExpand();
        }
    }

    handleExpand = () => {
        if(this.props.context.multiple){
            if(this.props.context.activeID.indexOf(this.props.id) !== -1){
                this.setState({ height: this.content.current.scrollHeight });
            } else {
                this.setState({ height: 0});
            }
        } else {
            if(this.props.id === this.props.context.activeID){
                this.setState({ height: this.content.current.scrollHeight });
            } else {
                this.setState({ height: 0});
            }
        }
    };

    render(){
        return (
            <div className={"accordion-collapse"} style={{height: this.state.height}} ref={this.content}>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default withAccordionContext(Collapse);
