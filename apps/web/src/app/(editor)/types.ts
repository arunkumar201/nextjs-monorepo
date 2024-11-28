export interface FileItem {
	name: string;
	type: "file" | "folder";
	children?: FileItem[];
	content?: string;
	path?: string;
}

export const SampleFiles: FileItem[] = [
	{
		name: "Folder 1",
		type: "folder",
		children: [
			{
				name: "File 1.txt",
				type: "file",
				content: "Content of File 1.txt",
			},
			{
				name: "Folder 2",
				type: "folder",
				children: [
					{
						name: "File 2.txt",
						type: "file",
						content: "Content of File 2.txt",
					},
				],
			},
		],
	},
	{
		name: "File 3.txt",
		type: "file",
		content: "Content of File 3.txt",
	},
	{
		name: "Folder 3",
		type: "folder",
		children: [
			{
				name: "File 4.txt",
				type: "file",
				content: "Content of File 4.txt",
			},
			{
				name: "Folder 4",
				type: "folder",
				children: [
					{
						name: "File 5.txt",
						type: "file",
						content: "Content of File 5.txt",
					},
				],
				path: "Folder 3/Folder 4",
				content: "Folder 4 content",
			},
		],
		path: "Folder 3",
		content: "Folder 3 content",
	},
];
