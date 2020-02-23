import React from "react";
import Row from "./Row";
import Collapse from "./Collapse";
import Header from "./Header";

import { AccordionContext } from "./Context";

class Accordion extends React.Component {

    static defaultProps = {
        multiple: false
    };
    static Row = Row;
    static Header = Header;
    static Collapse = Collapse;

    constructor(props) {
        super(props);

        this.state = {
            activeID: props.multiple ? [] : null
        }
    }

    handleDropdown = (id) => {
        if(this.props.multiple){
            let value = [...this.state.activeID];

            if(value.indexOf(id) !== -1){
                value.splice(value.indexOf(id), 1);
            } else if(this.state.activeID.length === 0){
                value = [id];
            } else {
                value.push(id);
            }

            this.setState({ activeID: value });

        } else {
            let value;

            if(this.state.activeID === id) {
                value = null;
            } else {
                value = id;
            }

            this.setState({ activeID: value });
        }
    };

    render() {
        return (
            <div className="accordion">
                <AccordionContext.Provider value={ { activeID: this.state.activeID, handleDropdown: this.handleDropdown, multiple: this.props.multiple } }>
                    { this.props.children }
                </AccordionContext.Provider>
            </div>
        );
    }
}

export default Accordion;
