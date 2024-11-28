"use client";

import { FileItem } from "../types";
import { FileNode } from "./FileNode";

interface FileExplorerProps {
	files: FileItem[];
}
export function FileExplorer({ files }: FileExplorerProps) {
	const onSelect = (file: FileItem) => {
		console.log("Selected file:", file);
		// Handle file selection
	};
	return (
		<>
			<div className="w-fit h-full overflow-y-auto bg-gray-900 p-2">
				{files.map((file) => (
					<FileNode
						key={file.name}
						file={file}
						onFileClick={onSelect}
						depth={0}
						expanded={true}
					/>
				))}
			</div>
		</>
	);
}
