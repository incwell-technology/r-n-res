import React from "react";
import TableRow from './Tablerow';

const Table = (props) => {
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
            < TableRow / >
        </tbody>
    </table>
    );
};

export default Table;