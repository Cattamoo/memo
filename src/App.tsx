import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMemos} from "./store/reducers/memoReducer";
import Header from "./components/ui/Header";

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const memos = localStorage.getItem('memos') || '{}';
		if(memos != null) {
			dispatch(setMemos(JSON.parse(memos)));
		}
	}, [dispatch]);
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
