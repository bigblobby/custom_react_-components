import React from 'react';
import {withAccordionContext} from "./WithAccordionContext";

class Row extends React.Component{
    render(){
        return (
            <div className={"accordion-row " + (this.props.id == this.props.context.activeID ? 'active' : '')}>
                {this.props.children}
            </div>
        )
    }
}

export default withAccordionContext(Row);
