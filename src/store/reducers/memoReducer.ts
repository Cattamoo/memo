import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid';
import moment, {Moment} from "moment";

interface Memo {
	id: string;
	title: string;
	content: string;
	createdAt: Moment;
	updatedAt: Moment;
}

type MemoState = { [id: string]: Memo };

const initialState: MemoState = {};

const memoSlice = createSlice({
	name: 'memos',
	initialState,
	reducers: {
		setMemos: (state: MemoState, { payload }) => {
			return payload.data;
		},
		createMemo: (state: MemoState, { payload }) => {
			const id = uuid();
			return {
				...state,
				[id]: {
					id,
					title: payload.title,
					content: payload.content,
					createdAt: moment(),
					updatedAt: moment(),
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
					updatedAt: moment(),
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
