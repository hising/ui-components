import * as React from "react";

interface ButtonProps {
    children: any
    onClick: () => void;
}

export class Button extends React.Component<ButtonProps, any> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
    }
    render() {
        return <div className="btn" onClick={this.props.onClick}>{this.props.children}</div>;
    }
}
