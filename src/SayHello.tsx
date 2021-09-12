import React from "react";

export interface SayHelloProps {
    foo: string
    giveYouClbck: (sayIt: SayHello) => void
}

export interface SayHelloStats {
    bar: string
}

export default class SayHello extends React.Component<SayHelloProps, SayHelloStats> {

    constructor(props: SayHelloProps) {
        super(props);

        this.state = {
            bar: 'Was soll ich sagen'
        }
        this.myfun = this.myfun.bind(this);
        props.giveYouClbck(this) ;
    }

    public myfun(msg: string) {
        this.setState({bar: msg}) ;
    }

    render() {
        return (
            <div>
                {this.state.bar}
            </div>

        );
    }
}
