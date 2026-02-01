import { useState } from 'react';

const Navbar = function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/assets/images/logo.svg" alt="logo" />
                </a>
            </div>

            <button
                className="navbar-toggler"
                type="button"
                onClick = {() => setOpen(!open) }
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <Console className="log">{open ? "Open" : "Closed"}</Console>

            <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                    <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;