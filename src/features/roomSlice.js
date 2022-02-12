import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomId: "",
  },

  reducers: {
    enterRoomId: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

export const { enterRoomId } = roomSlice.actions;

export const selectRoomId = (state) => state.room.roomId;

export default roomSlice.reducer;
