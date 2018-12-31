import * as React from 'react';

type Props = {
    tableContent: JSX.Element[]
}

class TableBody extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { tableContent } = this.props;

        return (
            <tbody>
                {tableContent}
            </tbody>
        );
    }
}

export default TableBody;