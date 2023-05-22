import React, {useEffect, useState} from 'react';
import {Memo} from "../types/memoTypes";
import {createMemo, updateMemo} from "../store/reducers/memoReducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

type Props = {
	memo?: Memo
};

export default function EditForm({ memo }: Props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id, title, content } = memo || {};
	const [titleText, setTitleText] = useState<string>('');
	const [contentText, setContentText] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if(id == null) {
			dispatch(createMemo({title: titleText, content: contentText}));
			navigate('/');
		} else {
			dispatch(updateMemo({id, title: titleText, content: contentText}));
			navigate(`/detail/${id}`);
		}
	}

	useEffect(() => {
		setTitleText(title || '');
		setContentText(content || '')
	}, [title, content])

	return (
		<form className="w-full flex flex-col gap-1" onSubmit={handleSubmit}>
			<input
				className="p-2 outline-none border-l-2 duration-75 focus:border-red-300 font-bold"
				type="text"
				name="title"
				placeholder="제목"
				value={titleText}
				onChange={({target}) => setTitleText(target.value)}
			/>
			<textarea
				className="p-2 outline-none border-l-2 duration-75 focus:border-red-300 h-40 resize-none"
				name="content"
				placeholder="내용"
				value={contentText}
				onChange={({target}) => setContentText(target.value)}
			/>
			<button className="p-2 disabled:bg-zinc-50 disabled:text-zinc-300" disabled={titleText === '' || contentText === ''}>저장</button>
		</form>
	);
}