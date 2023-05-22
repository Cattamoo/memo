import React, {useEffect, useState} from 'react';
import {Memo} from "../types/memoTypes";
import {createMemo, updateMemo} from "../store/reducers/memoReducer";
import {useDispatch} from "react-redux";

type Props = {
	memo?: Memo
};

export default function EditForm({ memo }: Props) {
	const dispatch = useDispatch();
	const { id, title, content } = memo || {};
	const [titleText, setTitleText] = useState<string>();
	const [contentText, setContentText] = useState<string>();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if(id == null) {
			dispatch(createMemo({title: titleText, content: contentText}));
		} else {
			dispatch(updateMemo({id, title: titleText, content: contentText}));
		}
	}

	useEffect(() => {
		setTitleText(title || '');
		setContentText(content || '')
	}, [title, content])

	return (
		<form className="w-full flex flex-col" onSubmit={handleSubmit}>
			<input
				className="outline-none"
				type="text"
				name="title"
				placeholder="제목"
				value={titleText}
				onChange={({target}) => setTitleText(target.value)}
			/>
			<textarea
				className="outline-none resize-none"
				name="content"
				placeholder="내용"
				value={contentText}
				onChange={({target}) => setContentText(target.value)}
			/>
			<button className="disabled:bg-zinc-50 disabled:text-zinc-300" disabled={titleText === '' || contentText === ''}>저장</button>
		</form>
	);
}