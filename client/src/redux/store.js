import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import donarSlice from "./features/donar/getRecordSlice";
import analyticSlice from "./features/analytics/analyticsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    records: donarSlice.reducer,
    analytics: analyticSlice.reducer,
  },
});

export default store;
