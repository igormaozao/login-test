import * as React from 'react';
import Button from '../Button';

type Props = {
    className?: string,
    btnText: string,
    onClickCallback: Function,
    callbackData: any
}

class CancelButton extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    _onClick = () => {
        const { onClickCallback, callbackData } = this.props;
        onClickCallback(callbackData);
    }

    render() {
        const { className, btnText } = this.props;
        return (
            <Button
                className={className}
                btnText={btnText}
                onClickCallback={this._onClick}
            />
        );
    }
}

export default CancelButton;