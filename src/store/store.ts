import { configureStore } from '@reduxjs/toolkit';
import memoReducer from "./reducers/memoReducer";
import {saveMemo} from "../utils/localStorageUtils";

const store = configureStore({
	reducer: {
		memos: memoReducer
	}
});

store.subscribe(() => {
	const { memos } = store.getState();
	saveMemo(memos);
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
