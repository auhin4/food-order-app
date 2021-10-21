const types = {
  ADD_ORDER: "ADD_ORDER",
  GET_ORDERS: "GET_ORDERS",
  POPULATE_ORDERS: "POPULATE_ORDERS"
};

export default types;

export const addOrderRedux = (payload) => {
  return { type: types.ADD_ORDER, payload };
};

export const getOrdersRedux = () => {
  return { type: types.GET_ORDERS };
};

export const populateOrders = (orders) => {
    return { type: types.POPULATE_ORDERS, payload: orders };
  };