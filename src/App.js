import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Orders from "./components/Orders/Orders";
import { Route, Switch } from "react-router-dom";
import OrderDetail from "./components/Orders/OrderDetail";

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
        <Switch>
        <Route path="/" exact>
          <Meals />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
        <Route path="/orders/:id" exact>
          <OrderDetail />
        </Route>
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
