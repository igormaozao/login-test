import * as React from 'react';
import Order from 'src/models/Order';
import Table from '../Table';
import CancelButton from './../HTMLComponents/Buttons/CancelButton/index';

type Props = {
    ordersList: Order[],
    onCancelCallback: Function
}

class OrdersTable extends React.Component<Props, {}> {
    
    tableHeads = ['Order ID', 'Client', 'Burguers Quantity', 'Price', ''];

    constructor(props: Props) {
        super(props);
    }

    _onCancelOrder = (id: number) => {
        const { onCancelCallback } = this.props;
        onCancelCallback(id);
    }

    render() {
        const { ordersList } = this.props;
        
        const content = ordersList.map((order, index) => {
            return (
            <tr key={index} className={`${index % 2 === 0 ? '' : 'colored'}`}>
                    <td>{order.id}</td>
                    <td>{order.clientName}</td>
                    <td>{order.burguers.length} {`burger${order.burguers.length > 1 ? 's' : ''}`}</td>
                    <td>${order.totalOrderPrice()}</td>
                    <td>
                        <CancelButton
                            className="cancel-btn"
                            btnText="Cancel Order"
                            callbackData={order.id}
                            onClickCallback={this._onCancelOrder}
                        />
                    </td>
                </tr>
            )});

        return(
            <Table
                tableHeads={this.tableHeads}
                tableContent={content}
            />
        );
    }
}

export default OrdersTable;