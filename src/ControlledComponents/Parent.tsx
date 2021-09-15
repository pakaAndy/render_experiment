import React from "react";
import ControlledChild from "./ControlledChild";
import Controller from "./Controller";
import ChildAboveTriggeringChild from "./ChildAboveTriggeringChild";
import Controllers from "./Controllers";
import ChildAboveTriggeringChild2 from "./ChildAboveTriggeringChild2";

export interface ParentProps {

}

export interface ParentStats {
    controller: Controller,
    controllers: Controllers
}

export default class Parent extends React.Component<ParentProps, ParentStats> {
    constructor(props: ParentProps) {
        super(props);
        // Controller in Constructor initialisieren
        this.state = {
            controller : new Controller(100),
            controllers: new Controllers()
        }
        this.update = this.update.bind(this);
        this.updateDeepControlled = this.updateDeepControlled.bind(this);
        this.addChildBranch = this.addChildBranch.bind(this);
        this.renderBranches = this.renderBranches.bind(this);
        this.branchUpdateZahl = this.branchUpdateZahl.bind(this);
    }
    /**
     * 1. Controller updaten
     * 2. setState {controller: prevState.controller} übergeben
     */
    public update() {
        this.state.controller.increment() ;         // Update Controller
        this.setState(prevState => {            // Aufruf setState
            return {controller: prevState.controller} ;
        })
    }

    public updateDeepControlled(zahl: number){
        this.state.controller.updateZahl(zahl) ;
        this.setState(prevState => {
            return {controller: prevState.controller}
        })
    }

    componentDidUpdate(prevProps: Readonly<ParentProps>, prevState: Readonly<ParentStats>, snapshot?: any): void {
        console.log('Parent - componentDidUpdate');
    }

    public addChildBranch(zahl: number){
        this.state.controllers.addController(zahl) ;
        this.setState(prevState => {
            return {controller: prevState.controller}
        })
    }

    private branchUpdateZahl(zahl: number, branchIndex: number){
        this.state.controllers.controllerSetZahl(zahl,branchIndex) ;
        this.setState(prevState =>{
            return {controllers: prevState.controllers} ;
        })
    }

    private renderBranches(){
        return this.state.controllers.getControllers().map((controller, index) =>{
            return <ChildAboveTriggeringChild2 controller={controller}
                                               updateZahl={this.branchUpdateZahl}
                                               key={index}
                                               level={0}/>
        })
    }

    /**
     * Controller an Child-Component übergeben
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div>
                <h3>ich bin Parent</h3>
                <ControlledChild controller={this.state.controller} />
                <button onClick={this.update} >Click halt mal</button>
                <ChildAboveTriggeringChild level={0} controller={this.state.controller} updateZahl={this.updateDeepControlled} />
                <div className={'branches'} >
                    {this.renderBranches()}
                    <button value={1} onClick={() => this.addChildBranch(1)}>Add Zweig mit 1</button>
                    <button value={2} onClick={() => this.addChildBranch(2)}>Add Zweig mit 2</button>
                    <button value={3} onClick={() => this.addChildBranch(3)}>Add Zweig mit 3</button>
                    <button value={4} onClick={() => this.addChildBranch(4)}>Add Zweig mit 4</button>
                    <button value={5} onClick={() => this.addChildBranch(5)}>Add Zweig mit 5</button>
                    <button value={6} onClick={() => this.addChildBranch(6)}>Add Zweig mit 6</button>
                    <button value={7} onClick={() => this.addChildBranch(7)}>Add Zweig mit 7</button>
                </div>
            </div>
        );
    }
}
