import React from 'react';
import PageLayout from "../components/layout/PageLayout";
import EditForm from "../components/EditForm";

export default function AddMemo() {
	return (
		<PageLayout className="max-w-[500px]">
			<EditForm />
		</PageLayout>
	);
}