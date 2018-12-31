import * as React from 'react';
import Order from 'src/models/Order';
import List from '@material-ui/icons/List';
import FilterList from '@material-ui/icons/FilterList';
import NavBar from 'src/components/NavBar';
import TextInput from 'src/components/HTMLComponents/TextInput';

import { BurguersOrdersMockList } from './../../_mocks_/BurguersOrdersMockList';

import './index.scss';
import OrdersTable from 'src/components/OrdersTable';

type State = {
    orders: Order[],
    filteredOrders: Order[],
    filterText: string
}

class Home extends React.Component<{}, State> {

    constructor() {
        super({});

        this.state = {
            orders: [],
            filteredOrders: [],
            filterText: ''
        }
    }

    componentDidMount() {
        this.setState({ orders: BurguersOrdersMockList });
    }

    _onFilterChange = (event: HTMLInputElement) => {
        this.setState({ filterText: event.value }, () => this._applyFilter());
    }

    _applyFilter = () => {
        const { orders, filterText } = this.state;
        let filteredOrders:Order[] = [];

        if (filterText === '') {
            this.setState({ filteredOrders });
            return;
        }

        const filterArray = filterText.toLowerCase().split(' ').filter(t => t !== '');
        orders.map((order: Order) => {
            let match = false;
            filterArray.map(filter => {
                if (order.id.toString() === filter 
                        || order.clientName.toLowerCase().indexOf(filter) !== -1) {
                            match = true;
                        }
            });
            if (match) {
                filteredOrders.push(order);
            }
        });

        this.setState({ filteredOrders });
    }

    _onCancelOrder = (id: number) => {
        if (id >= 0) {
            let { orders } = this.state;
            orders = orders.filter(o => o.id !== id);

            this.setState({ orders });
        }
    }

    render() {
        const { orders, filteredOrders, filterText } = this.state;
        let ordersList: Order[] = filterText !== '' ? filteredOrders : orders;
        
        return(
            <div>
                <NavBar />
                <div className="home">
                    <div className="order-form">
                        <div className="order-title">
                            <span>Orders List</span>
                            <List className="icon" />
                        </div>
                        <div className="order-filter">
                            <TextInput
                                className="filter"
                                placeholder="Search by order id, client name..."
                                icon={<FilterList className="icon" />}
                                onChangeCallback={this._onFilterChange}
                            />
                        </div>
                        <div className="form-body">
                            <div className="order-list">
                                <OrdersTable
                                    ordersList={ordersList}
                                    onCancelCallback={this._onCancelOrder}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;