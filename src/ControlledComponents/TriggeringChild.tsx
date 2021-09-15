import React, {ChangeEvent} from "react";
import Controller from "./Controller";
import NumberInput from "./NumberInput";

export interface TriggeringChildProps {
    controller: Controller ,
    update: (zahl: number) => void,
}

export interface TriggeringChildStats {
    showInput: boolean
}

export default class TriggeringChild extends React.Component<TriggeringChildProps, TriggeringChildStats> {

    constructor(props: TriggeringChildProps) {
        super(props);
        this.state = {
            showInput: false
        }

        this.updateZahl = this.updateZahl.bind(this);
        this.openInput = this.openInput.bind(this);
        this.closeInput = this.closeInput.bind(this);
    }

    public updateZahl(zahl: number) {
        this.props.update(zahl) ;
    }

    public openInput(){
        this.setState({showInput : true}) ;
    }

    public closeInput(zahl: number){

        this.props.update(zahl) ;
        this.setState({showInput: false}) ;
    }

    componentDidUpdate(prevProps: Readonly<TriggeringChildProps>, prevState: Readonly<TriggeringChildStats>, snapshot?: any): void {
        console.log('TriggeringChild - componentDidUpdate state.showInput: ' , this.state.showInput , ' prevState.showInput: ', prevState.showInput);
    }

    render() {
        return (
            <div>
                <p >triggering Child Zahl: {this.props.controller.getZahl()}</p>
                {this.state.showInput
                    ? <NumberInput zahl={this.props.controller.getZahl()} updateZahl={this.closeInput}/>
                    :  <button onClick={this.openInput} >OpenInput</button>
                }



            </div>

        );
    }
}
