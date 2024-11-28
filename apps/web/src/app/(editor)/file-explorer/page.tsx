import { FileArchive } from "lucide-react";
import { FileExplorer } from "../_components/FileExplorer";
import { SampleFiles } from "../types";
export default function FileExplorerPage() {
	return (
		<div className="flex flex-col gap-4 p-4 bg-gray-900 text-slate-50 min-h-screen">
			<div
				className="flex flex-row items-center justify-start gap-3 cursor-pointer hover:text-blue-300 hover:underline 
			border-[0.3px]  w-fit border-blue-500 rounded-md px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-500/10
			"
			>
				<FileArchive size={28} className="text-white" />
				<h1 className="text-2xl font-bold">File Explorer</h1>
			</div>
			<FileExplorer files={SampleFiles} />
		</div>
	);
}
