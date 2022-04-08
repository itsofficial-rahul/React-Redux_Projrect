import { createStore } from "redux";

import Reducer from "./cakes/CakeReducer";
const Store = createStore(Reducer);
export default Store;
