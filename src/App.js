import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";
import ProductDetail from "./Pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/ => component A
// our-domain.com/products => component B
// our-domain.com/product-detail/a-book
