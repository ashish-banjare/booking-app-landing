import { useEffect, useState } from 'react';
import logoLight   from '../../assets/images/logo.svg';
import logoDark   from '../../assets/images/logo-2.svg';

const Navbar = () => {

    const [ isSticky, setIsSticky ] = useState( false );

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header_navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="#">
                                <img src={ isSticky ? logoDark : logoLight  } alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="page-scroll" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#features">Feature</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#screenshot">Screenshot</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#pricing">Pricing</a>
                                    </li>                                    
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#blog">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Navbar;