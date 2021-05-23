import React from "react";
const logout = () => {
    localStorage.clear();

    window.location.reload();
  };
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="https://chatengine.io/">Let's Chat</a>

                <div className="collapse navbar-collapse d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                        <a className="nav-link btn-lg" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link btn-lg" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link btn-lg " href="/contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                        <div className="logout"><button type="button" onClick={logout}>Logout</button></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;