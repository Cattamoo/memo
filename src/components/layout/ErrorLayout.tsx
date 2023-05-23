import React from 'react';
import {IconType} from "react-icons";

type Props = {
	Icon: IconType;
	message: string;
	children?: React.ReactNode;
}

export default function ErrorLayout({ Icon, message, children = '' }: Props) {
	return (
		<div className="h-full flex flex-col items-center justify-center">
			<Icon className="text-7xl mb-4 text-zinc-400" />
			<p>{message}</p>
			{children}
		</div>
	);
}