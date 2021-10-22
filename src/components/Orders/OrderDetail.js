import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./Orders.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import OrderItem from "./OrderItem/OrderItem";
import { getOrderByIdRedux } from "../../actions/orders.actions";

const OrderDetail = () => {
  const params = useParams();
  const orders = useSelector((state) => state.order);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      orders.map((order) => (
        <OrderItem
          user={order.user}
          id={order.id}
          orderedItems={order.orderedItems}
        />
      ));
    } catch (error) {
      <OrderItem
        user={orders.user}
        id={orders.id}
        orderedItems={orders.orderedItems}
      />;
    }
  }, [orders]);

  useEffect(() => {
    try {
      dispatch(getOrderByIdRedux({ id: params.id }));
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

  const ordersList = () => {
    try {
      return orders.map((order) => (
        <OrderItem
          user={order.user}
          id={order.id}
          orderedItems={order.orderedItems}
        />
      ));
    } catch (error) {
      return (
        <OrderItem
          user={orders.user}
          id={orders.id}
          orderedItems={orders.orderedItems}
        />
      );
    }
  };

  return (
    <Fragment>
      <section className={classes.orders}>
        <Card>{ordersList()}</Card>
      </section>
    </Fragment>
  );
};

export default OrderDetail;
