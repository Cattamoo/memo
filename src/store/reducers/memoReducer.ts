import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid';
import moment from "moment";

interface Memo {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}

type MemoState = { [id: string]: Memo };

const initialState: MemoState = {};

const memoSlice = createSlice({
	name: 'memos',
	initialState,
	reducers: {
		setMemos: (state: MemoState, { payload }) => {
			return payload;
		},
		createMemo: (state: MemoState, { payload }) => {
			const id = uuid();
			return {
				...state,
				[id]: {
					id,
					title: payload.title,
					content: payload.content,
					createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
					updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
				}
			};
		},
		updateMemo: (state: MemoState, { payload }) => {
			const id = payload.id;
			return {
				...state,
				[id]: {
					...state[id],
					title: payload.title,
					content: payload.content,
					updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
				}
			};
		},
		removeMemo: (state: MemoState, { payload }) => {
			const id = payload.id;
			delete state[id];
			return state;
		},
	}
});

export const { setMemos, createMemo, updateMemo, removeMemo } = memoSlice.actions;
export default memoSlice.reducer;
