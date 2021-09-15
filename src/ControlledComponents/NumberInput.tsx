import React, {ChangeEvent} from "react";

export interface NumberInputProps {
    zahl: number,
    updateZahl: (zahl: number) => void
}

export interface NumberInputStats {
    showInput: boolean,
    zahl: number
}

export default class NumberInput extends React.Component<NumberInputProps, NumberInputStats> {


    constructor(props: NumberInputProps) {
        super(props);

        this.state = {
            showInput: false,
            zahl : props.zahl
        }
        this.updateZahl = this.updateZahl.bind(this);
        this.closeInput = this.closeInput.bind(this);
    }



    public updateZahl(event: ChangeEvent) {
        let target = event.target as HTMLInputElement ;
        let value =  parseInt( target.value );
        console.log('TRiggeringChild, zahl in updateZahl: ' , {value}) ;
        this.setState({zahl: value}) ;
    }

    public closeInput(){
        this.props.updateZahl(this.state.zahl) ;
    }

    componentDidUpdate(prevProps: Readonly<NumberInputProps>, prevState: Readonly<NumberInputStats>, snapshot?: any): void {
        console.log('NumberInput - componentDidUpdate  ');
    }

    render() {
        return (
            <div>
                <button onClick={this.closeInput} >Close Input</button>
                <input value={this.state.zahl} type={'number'} onChange={this.updateZahl}/>
            </div>

        );
    }
}
