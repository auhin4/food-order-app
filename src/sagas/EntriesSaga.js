import { call, put, take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";
import { populateEntries } from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries now");
  const { data } = yield call(axios, "http://localhost:3001/entries");
  console.log(data);
  yield put(populateEntries(data));
}
