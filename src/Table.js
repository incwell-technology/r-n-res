import React from "react";
import TableRow from './Tablerow';

const Table = () => {
    let orderList = [
        {
            index: 1,
            date: "May 31, 2019",
            food_item: "Chicken Pizza",
            price: 600,
            quantity: 1,
            net_amount: 600,
            status: "Pending"
        },
        {
            index: 2,
            date: "May 31, 2019",
            food_item: "Ham Burger",
            price: 100,
            quantity: 2,
            net_amount: 200,
            status: "In-progress"
        }
    ];

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
            {orderList.map((order, i) =>
                < TableRow order={order} key={i} / >
            )}
           
        </tbody>
    </table>
    );
};

export default Table;