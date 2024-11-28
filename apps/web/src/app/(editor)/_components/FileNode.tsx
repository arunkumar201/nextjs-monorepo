import { ChevronDown, ChevronRight, File, Folder } from "lucide-react";
import { FileItem } from "../types";
import { useState } from "react";
import { Button } from "@arun/ui/components/ui/button";

export interface IFileNodeProps {
	file: FileItem;
	onFileClick: (file: FileItem) => void;
	depth: number;
	expanded?: boolean;
}

export function FileNode({
	file: item,
	depth,
	onFileClick,
	expanded = false,
}: IFileNodeProps) {
	const [isExpanded, setIsExpanded] = useState(expanded);

	const handleClick = () => {
		if (item.type === "folder") {
			setIsExpanded(!isExpanded);
		} else {
			onFileClick(item);
		}
	};

	return (
		<div className="select-none">
			<Button
				className="flex items-center gap-3 rounded-md cursor-pointer hover:bg-gray-700 px-3 py-2"
				style={{
					paddingLeft: `${depth * 1.5}rem`,
				}}
				onClick={handleClick}
			>
				{item.type === "folder" && (
					<span className="text-gray-400">
						{isExpanded ? (
							<ChevronDown className="w-4 h-4" />
						) : (
							<ChevronRight className="w-4 h-4" />
						)}
					</span>
				)}
				{item.type === "folder" ? (
					<Folder className="w-4 h-4 text-blue-400" />
				) : (
					<File className="w-4 h-4 text-gray-400" />
				)}
				<span className="text-gray-200 w-fit truncate text-start">
					{item.name}
				</span>
			</Button>
			{item.type === "folder" && isExpanded && item.children && (
				<div className="pl-6">
					{item.children.map((child, index: number) => (
						<FileNode
							key={`${child.path}-${index}`}
							file={child}
							depth={depth + 1}
							onFileClick={onFileClick}
						/>
					))}
				</div>
			)}
		</div>
	);
}
