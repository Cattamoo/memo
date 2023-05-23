import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import NotFoundMemo from "../components/NotFoundMemo";
import PageLayout from "../components/layout/PageLayout";
import EditForm from "../components/EditForm";
import {FaPenSquare} from "react-icons/fa";

export default function EditMemo() {
	const {id} = useParams();
	const memos = useSelector((state: RootState) => state.memos);

	return (
		<PageLayout className="max-w-[500px]">
			{
				memos == null || memos[id!] == null
					? <NotFoundMemo />
					: <>
						<div className="flex items-center gap-2 text-lg font-bold"><FaPenSquare/> 수정</div>
						<EditForm memo={memos[id!]}/>
					</>
			}
		</PageLayout>
	);
}