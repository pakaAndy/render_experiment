import React from "react";
import Controller from "./Controller";

export interface ChildProps {
    zahl: number
    controller: Controller
}

export interface ChildStats {

}

export default class Child extends React.Component<ChildProps, ChildStats> {

    constructor(props: ChildProps) {
        super(props);


        this.myfun = this.myfun.bind(this);
    }

    public myfun() {

    }

    render() {
        return (
            <div>
                {/*<p>Child Zahl: {this.props.zahl}</p>*/}
                <p>Controller Zahl: {this.props.controller.getZahl()}</p>
            </div>

        );
    }
}
