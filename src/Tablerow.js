import React from "react";

const Tablerow = (props) => {
    return (
        <tr>
            <th scope="row">1</th>
            <td>May 31, 2019</td>
            <td>Chicken Pizza</td>
            <td>600</td>
            <td>1</td>
            <td>600</td>
            <td>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle btn-primary" type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pending

                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Processing</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Processed</a>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default Tablerow;