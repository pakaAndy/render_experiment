import React from "react";
import Controller from "./Controller";
import TriggeringChild, {TriggeringChildProps, TriggeringChildStats} from "./TriggeringChild";

export interface ChildAboveTriggeringChildProps {
    controller: Controller,
    updateZahl: (zahl: number) => void,
    level: number
}

export interface ChildAboveTriggeringChildStats {

}

export default class ChildAboveTriggeringChild extends React.Component<ChildAboveTriggeringChildProps, ChildAboveTriggeringChildStats> {

    constructor(props: ChildAboveTriggeringChildProps) {
        super(props);

        this.updateZahl = this.updateZahl.bind(this);
    }

    public updateZahl(zahl: number) {
        console.log('ChildAbove updateZahl: zahl: ', zahl) ;
        this.props.updateZahl(zahl) ;
    }


    componentDidUpdate(prevProps: Readonly<ChildAboveTriggeringChildProps>, prevState: Readonly<ChildAboveTriggeringChildStats>, snapshot?: any): void {
        console.log('ChildAboveTriggeringChild - componentDidUpdate');
    }

    render() {
        return (
            <div>
                <p>ChildAboveTriggeringChild Level: {this.props.level}, Zahl: {this.props.controller.getZahl()}</p>
                   <TriggeringChild controller={this.props.controller} update={this.updateZahl} />


            </div>

        );
    }
}
