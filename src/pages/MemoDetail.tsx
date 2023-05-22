import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {removeMemo} from "../store/reducers/memoReducer";
import PageLayout from "../components/layout/PageLayout";
import {FaPenSquare, FaTrash} from "react-icons/fa";

export default function MemoDetail() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {id} = useParams();
	const memos = useSelector((state: RootState) => state.memos);

	const handleRemove = () => {
		dispatch(removeMemo({ id }));
		navigate('/');
	}

	if(memos == null || memos[id!] == null) {
		// TODO: id가 유효하지 않을 때 처리
		return <></>
	} else {
		const { title, content, createdAt, updatedAt } = memos[id!];
		return (
			<PageLayout>
				<div className="relative text-center mt-4 pb-2 mb-2 shadow-[0_5px_10px_-3px_#d0d0cf]">
					<h2 className="text-xl font-bold">{title}</h2>
					<div className="text-xs">
						<div>생성일자: {createdAt}</div>
						<div>수정일자: {updatedAt}</div>
					</div>
					<div className="absolute right-0 top-1/2 -translate-y-2/4 flex flex-col gap-2 mr-2">
						<Link to={`/edit/${id}`}><FaPenSquare /></Link>
						<button onClick={handleRemove}><FaTrash /></button>
					</div>
				</div>
				<p className="py-2 px-4 whitespace-pre">{content}</p>
			</PageLayout>
		);
	}
}