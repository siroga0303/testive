import { NavLink, redirect } from 'react-router-dom';
import './Navigation.scss';
import Logo from '../../assets/Logo.png';
const Nav = (props) => {
    return (
        <header className="header">
            <img
                className="nav__logo"
                src={Logo}
            />

            <nav className="nav__container">
                <NavLink
                    to="/"
                    className="nav__item"
                >
                    Reccomendation
                </NavLink>

                <NavLink
                    to="/boardgames"
                    className="nav__item"
                >
                    All Boardgames
                </NavLink>
                {!props.isAuth && (
                    <NavLink
                        to="/auth"
                        className="nav__item"
                    >
                        Auth
                    </NavLink>
                )}
                {props.isAuth && (
                    <NavLink
                        to="/profile"
                        className="nav__item"
                    >
                        Profile
                    </NavLink>
                )}
                {props.isAuth && (
                    <NavLink
                        
                        className="nav__item logout"
                        onClick={() => {
                            props.onLogOut();
                            redirect('/');
                        }}
                    >
                        Log out
                    </NavLink>
                )}
            </nav>
        </header>
    );
};

export default Nav;
