import React from 'react';
import EditForm from "../components/EditForm";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

export default function EditMemo() {
	const {id} = useParams();
	const memos = useSelector((state: RootState) => state.memos);
	return (
		<div>
			<EditForm memo={memos[id!]} />
		</div>
	);
}