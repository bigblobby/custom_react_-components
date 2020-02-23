import React, { Component } from 'react';
import Row from "./Row";
import Collapse from "./Collapse";
import Header from "./Header";

import { AccordionContext } from "./Context";

class Accordion extends Component {

    static Row = Row;
    static Header = Header;
    static Collapse = Collapse;

    constructor(props) {
        super(props);

        this.state = {
            activeID: null
        }
    }

    handleDropdown = (id) => {
        let value;
        if(this.state.activeID == id) {
            value = null;
        } else {
            value = id;
        }

        this.setState({ activeID: value });
    };

    render() {
        return (
            <div className="accordion">
                <AccordionContext.Provider value={ { activeID: this.state.activeID, handleDropdown: this.handleDropdown } }>
                    { this.props.children }
                </AccordionContext.Provider>
            </div>
        );
    }
}

export default Accordion;
