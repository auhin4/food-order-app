const types = {
    ADD_ORDER: 'ADD_ORDER'
};

export default types;

export const addOrderRedux = (payload) => {
    return {type: types.ADD_ORDER, payload};
  }