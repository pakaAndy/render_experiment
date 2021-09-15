import React from "react";
import Controller from "./Controller";
import TriggeringChild, {TriggeringChildProps, TriggeringChildStats} from "./TriggeringChild";

export interface ChildAboveTriggeringChild2Props {
    controller: Controller,
    updateZahl: (zahl: number, branchIndex: number) => void,
    level: number
}

export interface ChildAboveTriggeringChild2Stats {

}

export default class ChildAboveTriggeringChild2 extends React.Component<ChildAboveTriggeringChild2Props, ChildAboveTriggeringChild2Stats> {

    constructor(props: ChildAboveTriggeringChild2Props) {
        super(props);

        this.updateZahl = this.updateZahl.bind(this);
    }

    public updateZahl(zahl: number) {
        let branchIndex = this.props.controller.getBranchindex() ;
        console.log('ChildAbove in branch '+ branchIndex + ' updateZahl: zahl: ', zahl) ;
        this.props.updateZahl(zahl, this.props.controller.getBranchindex()) ;
    }


    componentDidUpdate(prevProps: Readonly<ChildAboveTriggeringChild2Props>, prevState: Readonly<ChildAboveTriggeringChild2Stats>, snapshot?: any): void {
        console.log('ChildAboveTriggeringChild - componentDidUpdate');
    }

    render() {
        return (
            <div className={'outer_child'}>
                <p>ChildAboveTriggeringChild Level: {this.props.level}, Zahl: {this.props.controller.getZahl()}</p>
                   <TriggeringChild controller={this.props.controller} update={this.updateZahl} />


            </div>

        );
    }
}
