import * as React from 'react';

type Props = {
    tableHeads: string[]
}

class TableHead extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { tableHeads } = this.props;

        return (
            <thead>
                <tr>
                    {tableHeads.map((h, index) => <th key={index}>{h}</th>)}
                </tr>
            </thead>
        );
    }
}

export default TableHead;