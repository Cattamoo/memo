import React from 'react';
import ErrorLayout from "./layout/ErrorLayout";
import {BsClipboardX} from "react-icons/bs";

export default function NotFoundMemo() {
	return (
		<ErrorLayout Icon={BsClipboardX} message="해당 메모를 찾을 수 없습니다." />
	);
}