import { BUY_CAKE } from "../cakeType";

const intialstate = {
  numofcakes: 10,
};

const Reducer = (state = intialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofcakes: state.numofcakes - 1,
      };
    default:
      return state;
  }
};
export default Reducer;
