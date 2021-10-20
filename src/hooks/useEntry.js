import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addEntryRedux,
  removeEntryRedux,
  getAllEntries,
} from "../actions/entries.actions";
import { useEffect, useState } from "react";

function useEntry(itmId = "", nm = "", desc = "", prc = 0) {
  const [id, setId] = useState(itmId);
  const [name, setName] = useState(nm);
  const [description, setDescription] = useState(desc);
  const [price, setPrice] = useState(prc);

  const dispatch = useDispatch();

  useEffect(() => {
    setId(itmId);
    setName(nm);
    setDescription(desc);
    setPrice(prc);
  }, [itmId, nm, desc, prc]);

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        name,
        description,
        price,
      })
    );
    resetValues();
  }

  function resetValues() {
    setName("");
    setDescription("");
    setPrice("");
  }

  return {
    id,
    setId,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    addEntry,
  };
}

export default useEntry;
