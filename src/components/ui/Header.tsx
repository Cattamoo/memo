import React from 'react';
import Logo from "./Logo";
import {FaPlusSquare} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<header className="flex flex-col gap-4 items-center bg-white/50 shadow-lg pt-4 pb-2 mb-2">
			<Link to="/"><Logo /></Link>
			<div>
				<Link to="/add" className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300">
					<FaPlusSquare /> 메모 추가
				</Link>
			</div>
		</header>
	);
}