import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage";

export default class Router extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div id="content">
                    <Switch>
                        <Route path="/" component={Homepage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
