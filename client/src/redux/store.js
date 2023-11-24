import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import donarSlice from "./features/donar/donarSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    records: donarSlice.reducer,
  },
});

export default store;
