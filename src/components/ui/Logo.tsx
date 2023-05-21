import React from 'react';
import {FaPencilAlt} from "react-icons/fa";

export default function Logo() {
	return (
		<div className="flex items-center font-bold text-xl">
			<span className="text-red-500">M</span>
			<span className="text-amber-500">E</span>
			<span className="text-green-500">M</span>
			<span className="text-indigo-500">O</span>
			<span className="text-violet-500"><FaPencilAlt /></span>
		</div>
	);
}