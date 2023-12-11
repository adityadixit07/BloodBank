import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import donarSlice from "./features/donar/getRecordSlice";
import analyticSlice from "./features/analytics/analyticsSlice";
import adminSlice from "./features/admin/adminSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    records: donarSlice.reducer,
    analytics: analyticSlice.reducer,
    admin: adminSlice.reducer,
  },
});

export default store;
