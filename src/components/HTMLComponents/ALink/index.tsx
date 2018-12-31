import * as React from 'react';

type Props = {
    className?: string,
    linkText: string,
    onClickCallback: Function
}

class ALink extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);        
    }

    _onClick = (event: React.FormEvent<HTMLDivElement>) => {
        this.props.onClickCallback(event.target);
    }

    render() {
        const { className, linkText } = this.props;

        return (
            <div className={`${className || ''}`} onClick={this._onClick}>
                {linkText}
            </div>
        );
    }
}

export default ALink;