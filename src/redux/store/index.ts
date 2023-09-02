import { configureStore } from "@reduxjs/toolkit";
import { TasksSlice } from "../slices/tasks";
import { ConfigSlice } from "../slices/config";

export const store = configureStore({
	reducer: {
		tasks: TasksSlice.reducer,
		config: ConfigSlice.reducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;