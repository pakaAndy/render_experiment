import React from "react";
import Controller from "./Controller";

/**
 * Controller wird mit Props übergeben
 */
export interface ChildProps {
    controller: Controller
}
export default class ControlledChild extends React.Component<ChildProps, any> {
    /**
     * Child Component greift auf Controller zu
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div>
                <p>Child-Component - Controller Zahl: {this.props.controller.getZahl()}</p>
            </div>

        );
    }
}
