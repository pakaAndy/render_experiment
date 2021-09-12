import React from "react";
import Child from "./Child";
import Controller from "./Controller";

export interface ParentProps {

}

export interface ParentStats {
    bar: number
}

export default class Parent extends React.Component<ParentProps, ParentStats> {

    protected controller : Controller  ;

    constructor(props: ParentProps) {
        super(props);

        this.state = {
            bar: 0
        }
        this.controller = new Controller() ;
        this.myfun = this.myfun.bind(this);
    }

    public myfun() {
        this.controller.update(this.state.bar+1) ;
        this.setState(pervState => {
            let newBar = pervState.bar + 1 ;
            return {bar: newBar} ;
        })
    }

    render() {
        return (
            <div>
                <h3>ich bin Parent</h3>
                <Child zahl={this.state.bar} controller={this.controller} />
                <button onClick={this.myfun} >Click halt mal</button>
            </div>

        );
    }
}
