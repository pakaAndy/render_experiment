import React from "react";
import ListetParagraph, {ListetParagraphProps} from "./ListetParagraph";

export interface Paragraph_listProps {
    foo: ListetParagraphProps[]
}

export interface Paragraph_listStats {
    bar: ListetParagraphProps[]
}

export default class Paragraph_list extends React.Component<Paragraph_listProps, Paragraph_listStats> {

    constructor(props: Paragraph_listProps) {
        super(props);

        this.state = {
            bar: props.foo.length > 0
                ? JSON.parse(JSON.stringify(props.foo))
                : []
        }
        this.myfun = this.myfun.bind(this);
        this.addLine = this.addLine.bind(this);
    }

    public myfun() {
        console.log('starte map in ParList, foo: ', this.props.foo ) ;
        return  this.state.bar.map((zahl, index) =>
            <div  key={zahl.foo + '_' + index} >
                <ListetParagraph foo={zahl.foo}/>
            </div>
        );
    }

    private addLine(){
        this.setState((prevState: Paragraph_listStats) => {
            let newStateBar = [ ...prevState.bar] ;
            newStateBar.push({foo: newStateBar[newStateBar.length - 1].foo}) ;
            newStateBar[newStateBar.length-1].foo++ ;
            console.log('newStateBar: ' ,newStateBar);
            return {bar: newStateBar}
        })
    }

    render() {

        return (
            <div className={'ParList'}>
                {this.myfun()}
                <button onClick={this.addLine} >+1</button>
            </div>

        );
    }
}
