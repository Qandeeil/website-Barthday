import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/Data";

const initialState = {person: Data }
const PersonSlice = createSlice({
    name: 'person',
    initialState: initialState,
    reducers: {
        removeAll: (state,action) => {
            state.person = []
        }

    }
})
export default PersonSlice.reducer;
export const {removePerson , removeAll} = PersonSlice.actions