import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import PageLayout from "../components/layout/PageLayout";
import EditForm from "../components/EditForm";

export default function EditMemo() {
	const {id} = useParams();
	const memos = useSelector((state: RootState) => state.memos);
	return (
		<PageLayout className="max-w-[500px]">
			<EditForm memo={memos[id!]} />
		</PageLayout>
	);
}