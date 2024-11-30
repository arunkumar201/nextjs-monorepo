"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex flex-col gap-4 px-6 py-8">
			<div className="flex justify-center items-center h-screen">
				<Loader2 className="animate-spin text-primary-foreground" />
			</div>
		</div>
	);
}
