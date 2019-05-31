import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#">n-res</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Add Menu</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;
