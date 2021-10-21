import React, {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >Select Meals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders">Back Orders</NavLink>
                    </li>
                </ul>
            </nav>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
};

export default Header;