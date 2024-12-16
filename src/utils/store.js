import { createStore } from "redux";
import { pageReducer } from "./pageReducer";
export const pageStore = createStore(pageReducer);
