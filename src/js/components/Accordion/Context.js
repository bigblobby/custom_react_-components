import React from "react";

export const AccordionContext = React.createContext({
    activeID: null,
    handleDropdown: (id) => {},
    multiple: false
});
