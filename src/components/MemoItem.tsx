import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import {Memo} from "../types/memoTypes";

type Props = Memo;

export default function MemoItem({ id, title, content, updatedAt }: Props) {
	return (
		<li className="bg-white p-2 shadow hover:bg-zinc-50">
			<Link to={`/detail/${id}`} className="flex justify-between items-center">
				<div className="flex-1">
					<h3 className="text-lg font-bold line-clamp-1">{title}</h3>
					<p className="text-sm text-ellipsis whitespace-pre-line line-clamp-1">{content}</p>
				</div>
				<div className="min-w-fit text-sm">{moment(updatedAt).format('YYYY-MM-DD')}</div>
			</Link>
		</li>
	);
}