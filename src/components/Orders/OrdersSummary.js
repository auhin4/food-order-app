import classes from "./OrdersSummary.module.css";

const OrdersSummary = () => {
    return (
      <section className={classes.summary}>
        <h2>Current Queue of Back Orders</h2>
        <p>
          Here are a list of our current back orders. We hope to be transparent about
          how long it will take to get to your order.
        </p>
      </section>
    );
  };
  
  export default OrdersSummary;