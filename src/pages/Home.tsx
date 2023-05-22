import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import MemoItem from "../components/MemoItem";

export default function Home() {
	const memos = useSelector((state: RootState) => state.memos);

	return (
		<div className="max-w-screen-xl w-full">
			{
				Object.entries(memos).length === 0
					? (
						<div>
							Empty!
						</div>
					)
					: (
						<ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
							{
								Object.keys(memos).map(key => <MemoItem key={key} {...memos[key]} />)
							}
						</ul>
					)
			}
		</div>
	);
}