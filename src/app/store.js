import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/appSlice";
import roomSlice from "../features/roomSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    room: roomSlice,
  },
});
