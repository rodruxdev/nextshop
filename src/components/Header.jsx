import React from 'react';
import Image from 'next/image'
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const [toggleOrders, setToggleOrders] = React.useState(false);
  const { state } = React.useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} />

      <div className={styles["navbar-left"]}>
        <Image src={logo} alt="logo" className={styles["nav-logo"]} />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className={styles["navbar-right"]}>
        <ul>
          <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null} 
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
