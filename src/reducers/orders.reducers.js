import ordersTypes from "../actions/orders.actions";

const reducer = (state = initialOrders, action) => {
  let newOrders;
  switch (action.type) {
    case ordersTypes.POPULATE_ORDERS:
      return action.payload;
    case ordersTypes.ADD_ORDER:
      newOrders = state.concat({ ...action.payload });
      return newOrders;
    default:
      return state;
  }
};

export default reducer;

var initialOrders = [];
