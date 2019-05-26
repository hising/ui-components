import * as React from "react";

enum InputTypes {
    Text = "text",
    Password = "password",
    Email = "email",
    Hidden = "hidden",
    Tel = "tel",
    Url = "url",
    Search = "search"
}

interface InputProps {
    onClick: () => void;
    type: InputTypes
}

export class Input extends React.Component<InputProps, any> {

    constructor(props: Readonly<InputProps>) {
        super(props);
    }

    render() {
        return <div className="input" onClick={this.props.onClick} />;
    }
}
