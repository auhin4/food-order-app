import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Orders from "./components/Orders/Orders";
import { Route } from "react-router-dom";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Route path="/" exact>
          <Meals />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </main>
    </CartProvider>
  );
}

export default App;
