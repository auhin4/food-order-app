import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./Orders.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem/OrderItem";
import { getOrdersRedux } from "../../actions/orders.actions";
import OrdersSummary from "./OrdersSummary";

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    orders.map((order) => (
      <OrderItem user={order.user} id={order.id} orderedItems={order.orderedItems} />
    ));
  }, [orders]);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getOrdersRedux());
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className={classes.OrderLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.OrdersError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const ordersList = orders.map((order) => (
    <OrderItem user={order.user} id={order.id} orderedItems={order.orderedItems} />
  ));

  return (
    <Fragment>
        <OrdersSummary />
      <section className={classes.orders}>
        <Card>
          <ul>{ordersList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default Orders;
