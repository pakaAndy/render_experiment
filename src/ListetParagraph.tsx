import React from "react";

export interface ListetParagraphProps {
    foo: number
}



export default class ListetParagraph extends React.Component<ListetParagraphProps, any> {

    constructor(props: ListetParagraphProps) {
        super(props);

        this.myfun = this.myfun.bind(this);
    }

    public myfun() {

    }

    render() {
        return (
            <div className={'listedParagraph'}>
                <p>my number is {this.props.foo}</p>
            </div>

        );
    }
}
