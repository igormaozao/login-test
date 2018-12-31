import * as React from 'react';

type Props = {
    className?: string,
    btnText: string,
    onClickCallback: Function
};

class Button extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    _onClick = (event: React.FormEvent<HTMLButtonElement>) => {
        this.props.onClickCallback(event.target);
    }
    
    render() {
        const { className, btnText } = this.props;
        
        return (
            <div className={`${className || ''}`}>
                <button onClick={this._onClick}>{btnText}</button>
            </div>
        );
    }
}

export default Button;