import React from 'react';
import Accordion from "../components/Accordion/Accordion";
import { Link } from "react-router-dom";

export default class AccordionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }


    render(){
        return (
            <div>
                <Link to={"/"} >Back</Link>
                <h1>Accordion page</h1>
                <div>
                    <Accordion>
                        <Accordion.Row id="1">
                            <Accordion.Header id="1">One</Accordion.Header>
                            <Accordion.Collapse id="1">This is inside content one</Accordion.Collapse>
                        </Accordion.Row>
                        <Accordion.Row id="2">
                            <Accordion.Header id="2">Two</Accordion.Header>
                            <Accordion.Collapse id="2">This is two woohoo</Accordion.Collapse>
                        </Accordion.Row>
                        <Accordion.Row id="3">
                            <Accordion.Header id="3">Three</Accordion.Header>
                            <Accordion.Collapse id="3">Threeeeeeeee</Accordion.Collapse>
                        </Accordion.Row>
                    </Accordion>
                </div>
            </div>
        )
    }
}
