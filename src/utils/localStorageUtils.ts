import {MemoState} from "../types/memoTypes";

export const saveMemo = (memos: MemoState) => {
	localStorage.setItem('memos', JSON.stringify(memos));
};

export const loadMemo = () => {
	const memos = localStorage.getItem('memos');
	return memos ? JSON.parse(memos) : {};
};