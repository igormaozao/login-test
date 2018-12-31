import * as React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

type Props = {
    tableHeads: string[],
    tableContent: JSX.Element[]
}

class Table extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { tableHeads, tableContent } = this.props;

        return(
            <table>
                <TableHead tableHeads={tableHeads} />
                <TableBody tableContent={tableContent} />
            </table>
        );
    }
}

export default Table;