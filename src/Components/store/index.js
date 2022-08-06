import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from "./Person/Person";

const store = configureStore({reducer: {
    DataPerson: PersonSlice
}})
export default store