import { call, takeLatest } from "redux-saga/effects";
import ordersTypes from "../actions/orders.actions";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export function* addOrderSaga() {
  yield takeLatest(ordersTypes.ADD_ORDER, addOrderToDb);
}

function* addOrderToDb({ payload }) {
  yield call(addOrder, payload);
}

async function addOrder({ name, street, postalCode, city, items }) {
  await axios
    .post(
      "http://localhost:3001/orders",
      {
        id: uuidv4(),
        user: {
          name: name,
          street: street,
          postalCode: postalCode,
          city: city,
        },
        orderedItems: [...items],
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
