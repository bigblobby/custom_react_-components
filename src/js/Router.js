import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import AccordionPage from "./pages/AccordionPage";
import PillSelectorPage from "./pages/PillSelectorPage";
import SelectorPage from "./pages/SelectorPage";
import FormStepsPage from "./pages/FormStepsPage";

export default class Router extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div id="content">
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/accordion" component={AccordionPage} />
                        <Route path="/pill" component={PillSelectorPage} />
                        <Route path="/selector" component={SelectorPage} />
                        <Route path="/steps" component={FormStepsPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
