import React from 'react';
import {FaPencilAlt} from "react-icons/fa";

export default function Logo() {
	return (
		<div className="group flex items-center font-bold text-5xl">
			<span className="text-red-500 group-hover:text-red-300">M</span>
			<span className="text-amber-500 group-hover:text-amber-300">E</span>
			<span className="text-green-500 group-hover:text-green-300">M</span>
			<span className="text-indigo-500 group-hover:text-indigo-300">O</span>
			<span className="text-violet-500 group-hover:text-violet-300"><FaPencilAlt /></span>
		</div>
	);
}