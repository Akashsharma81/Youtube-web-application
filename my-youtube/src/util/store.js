import { configureStore } from "@reduxjs/toolkit";
import appReducers from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducers,
  },
});

export default store;
