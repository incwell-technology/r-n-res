import React from "react";

class Tablerow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.order.status
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        //axios
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.order.index}</th>
                <td>{this.props.order.date}</td>
                <td>{this.props.order.food_item}</td>
                <td>{this.props.order.price}</td>
                <td>{this.props.order.quantity}</td>
                <td>{this.props.order.net_amount}</td>
                <td>
                    <div className="form-group">
                        <select value={this.state.value} onChange={this.handleChange} className="form-control">
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