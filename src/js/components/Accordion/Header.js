import React from "react";
import {AccordionContext} from "./Context";
import {withAccordionContext} from "./WithAccordionContext";

class Header extends React.Component{
    render(){
        return (
            <div className="title" onClick={() => this.props.context.handleDropdown(this.props.id)}>{this.props.children}</div>
        )
    }
}

export default withAccordionContext(Header);
