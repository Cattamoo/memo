import React from 'react';
import PageLayout from "../components/layout/PageLayout";
import EditForm from "../components/EditForm";
import {FaPenSquare} from "react-icons/fa";

export default function AddMemo() {
	return (
		<PageLayout className="max-w-[500px]">
			<div className="flex items-center gap-2 text-lg font-bold"><FaPenSquare /> 추가</div>
			<EditForm />
		</PageLayout>
	);
}