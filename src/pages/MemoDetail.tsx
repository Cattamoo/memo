import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import PageLayout from "../components/layout/PageLayout";

export default function MemoDetail() {
	const {id} = useParams();
	const memos = useSelector((state: RootState) => state.memos);
	if(memos == null || memos[id!] == null) {
		// TODO: id가 유효하지 않을 때 처리
		return <></>
	} else {
		const { title, content, createdAt, updatedAt } = memos[id!];
		return (
			<PageLayout>
				<div className="text-center mt-4 pb-2 mb-2 shadow-[0_5px_10px_-3px_#d0d0cf]">
					<h2 className="text-xl font-bold">{title}</h2>
					<div className="text-xs">
						<div>생성일자: {createdAt}</div>
						<div>수정일자: {updatedAt}</div>
					</div>
				</div>
				<p className="py-2 px-4 whitespace-pre">{content}</p>
			</PageLayout>
		);
	}
}