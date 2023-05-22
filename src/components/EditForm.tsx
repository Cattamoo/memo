import React, {useState} from 'react';
import {Memo} from "../types/memoTypes";
import {createMemo, updateMemo} from "../store/reducers/memoReducer";
import {useDispatch} from "react-redux";

type Props = {
	memo?: Memo
};

export default function EditForm({ memo }: Props) {
	const dispatch = useDispatch();
	const { id, title, content } = memo || {};
	const [titleText, setTitleText] = useState(title);
	const [contentText, setContentText] = useState(content);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if(id == null) {
			dispatch(createMemo({title: titleText, content: contentText}));
		} else {
			dispatch(updateMemo({id, title: titleText, content: contentText}));
		}
	}

	return (
		<form className="w-full flex flex-col" onSubmit={handleSubmit}>
			<input type="text" name="title" placeholder="제목" value={titleText} onChange={({target}) => setTitleText(target.value)} />
			<textarea name="content" placeholder="내용" value={contentText} onChange={({target}) => setContentText(target.value)} />
			<button>저장</button>
		</form>
	);
}