import React, { Component } from 'react';
import {AccordionContext} from "./Context";

// This middleware is used so we can access the context anywhere, not just in 'Component' render method.
export const withAccordionContext = Component => {
    return props => {
        return (
            <AccordionContext.Consumer>
                {({activeID, handleDropdown}) => {
                    return <Component {...props} context={{ handleDropdown: handleDropdown, activeID: activeID }} />;
                }}
            </AccordionContext.Consumer>
        );
    };
};
