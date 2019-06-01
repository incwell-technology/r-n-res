import React from "react";
import axios from "axios";
import TableRow from './Tablerow';

class Table extends React.Component {
    state = {
        orderList: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/').then((res) => {
            this.setState({orderList: res.data});
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Food Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Net Amount</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.orderList.map((order, i) =>
                        < TableRow order={order} key={i} / >
                    )}

                </tbody>
            </table>
        );
    }
};

export default Table;