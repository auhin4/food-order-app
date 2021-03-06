import { call, put, take, takeLatest } from "redux-saga/effects";
import ordersTypes, { populateOrderById, populateOrders } from "../actions/orders.actions";
import axios from "axios";

export function* getOrders() {
  yield take(ordersTypes.GET_ORDERS);
  console.log("I need to get the orders now.");
  const {data} = yield call(axios, "http://localhost:3001/orders");
  console.log(data);
  yield put(populateOrders(data));
}

export function* getOrderByIdSaga() {
  yield takeLatest(ordersTypes.GET_ORDER_BY_ID, getOrderByIdFromDb);
}

function* getOrderByIdFromDb({payload}) {
  yield call(getOrderById, payload);
}

function* getOrderById({id}){
  console.log('Trying to retrieve specific order by id.');
  const{data} = yield call(axios, "http://localhost:3001/orders/" + id);
  console.log(data);
  yield put(populateOrderById(data));
}

export function* addOrderSaga() {
  yield takeLatest(ordersTypes.ADD_ORDER, addOrderToDb);
}

function* addOrderToDb({ payload }) {
  yield call(addOrder, payload);
}

async function addOrder({ id, user, orderedItems }) {
  await axios
    .post(
      "http://localhost:3001/orders",
      {
        id: id,
        user: user,
        orderedItems: orderedItems,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      this.setState({ warning: "Succeed" });
    })
    .catch((err) => {
      console.log(err);
    });
}
