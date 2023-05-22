import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import {Memo} from "../types/memoTypes";

type Props = Memo;

export default function MemoItem({ id, title, content, updatedAt }: Props) {
	return (
		<li className="bg-white p-2 shadow hover:bg-zinc-50">
			<Link to={`/detail/${id}`} className="flex justify-between items-center">
				<div>
					<h3 className="text-lg font-bold">{title}</h3>
					<p className="text-sm">{content}</p>
				</div>
				<div>{moment(updatedAt).format('YYYY-MM-DD')}</div>
			</Link>
		</li>
	);
}