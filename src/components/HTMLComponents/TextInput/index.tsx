import * as React from 'react';

type Props = {
    className?: string,
    placeholder?: string,
    icon?: JSX.Element,
    inputType?: string,
    onChangeCallback: Function
};

class TextInput extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeCallback(e.target);
    }

    render() {
        const { className, placeholder, icon, inputType } = this.props;
        return (
            <div className={`${className || ''}`}>
                <input
                    type={`${inputType || 'text'}`} 
                    placeholder={`${placeholder || ''}`}
                    onChange={this._onChange}
                />
                {icon && icon}
            </div>
        );
    }
}

export default TextInput;