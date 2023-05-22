import React from 'react';
import {Moment} from "moment";
import {Link} from "react-router-dom";

type Props = {
	id: string;
	title: string;
	content: string;
	updatedAt: Moment;
}

export default function MemoItem({ id, title, content, updatedAt }: Props) {
	return (
		<li className="bg-white p-2 shadow hover:bg-zinc-50">
			<Link to={`/detail/${id}`} className="flex justify-between items-center">
				<div>
					<h3 className="text-lg font-bold">{title}</h3>
					<p className="text-sm">{content}</p>
				</div>
				<div>{updatedAt.format('YYYY-MM-DD')}</div>
			</Link>
		</li>
	);
}