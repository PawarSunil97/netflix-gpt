import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUsers: (state, action) => {
            return action.payload; // Adds user to the array
        },
        removeUser: (state, action) => {
           return null
        }
    }
});

export const { addUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
