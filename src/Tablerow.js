import React from "react";
import axios from 'axios';

class Tablerow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.order.status
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(orderNum, event) {
        this.setState({
            value: event.target.value
        });
        axios.post('http://localhost:8080/statusUpdate', {
            orderNum,
            status: event.target.value
        })
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.order.orderNum}</th>
                <td>{this.props.order.date}</td>
                <td>{this.props.order.food_item}</td>
                <td>{this.props.order.price}</td>
                <td>{this.props.order.quantity}</td>
                <td>{this.props.order.net_amount}</td>
                <td>
                    <div className="form-group">
                        <select value={this.state.value} onChange={(e) => this.handleChange(this.props.order.orderNum, e)} className="form-control">
                            <option value="Pending">Pending</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Ready">Ready</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Tablerow;