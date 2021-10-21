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
  const order = useSelector((state) => state.orders);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getOrderByIdRedux({ id: params.id }));
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
      <OrderItem user={order.user} id={order.id} orderedItems={order.orderedItems} />
  }, [order]);

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
  
  const ordersList = 
    <OrderItem user={order.user} id={order.id} orderedItems={order.orderedItems} />;

  return (
    <Fragment>
      <section className={classes.orders}>
        <Card>{ordersList}</Card>
      </section>
    </Fragment>
  );
};

export default OrderDetail;
