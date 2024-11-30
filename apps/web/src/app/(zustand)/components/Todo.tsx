import { FC, useState } from "react";
import { ITodo, useTodoStore } from "../store/useTodoStore";
import { Button } from "@arun/ui/components/ui/button";
import { useShallow } from "zustand/shallow";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@arun/ui/components/ui/card";
import { Badge } from "@arun/ui/components/ui/badge";
import { CalendarIcon, TagIcon } from "lucide-react";

export const Todo: FC<ITodo> = ({
	id,
	title,
	completed,
	description,
	dueDate,
	priority,
	tags,
}) => {
	const { toggleTodo, updateTodo, removeTodo } = useTodoStore(
		useShallow((state) => ({
			toggleTodo: state.toggleTodo,
			updateTodo: state.updateTodo,
			removeTodo: state.removeTodo,
		}))
	);

	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(title);

	const handleToggle = () => toggleTodo(id);
	const handleDelete = () => removeTodo(id);
	const handleEdit = () => setIsEditing(true);
	const handleSave = () => {
		updateTodo(id, { title: editedTitle });
		setIsEditing(false);
	};

	const priorityColors = {
		low: "bg-blue-100 text-blue-800",
		medium: "bg-yellow-100 text-yellow-800",
		high: "bg-red-100 text-red-800",
	};

	return (
		<Card className="w-full max-w-md" key={id}>
			<CardHeader>
				<CardTitle>
					{isEditing ? (
						<input
							type="text"
							value={editedTitle}
							onChange={(e) => setEditedTitle(e.target.value)}
							className="w-full p-2 border rounded"
						/>
					) : (
						<span className={completed ? "line-through" : ""}>{title}</span>
					)}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-gray-600 mb-4">{description}</p>
				<div className="flex items-center space-x-2 mb-2">
					<CalendarIcon className="h-4 w-4 text-gray-400" />
					<span className="text-sm">
						{new Date(dueDate).toLocaleDateString()}
					</span>
				</div>
				{priority && (
					<Badge
						className={`${priorityColors[priority as keyof typeof priorityColors]} mb-2`}
					>
						{priority}
					</Badge>
				)}
				{tags && tags.length > 0 && (
					<div className="flex items-center space-x-2">
						<TagIcon className="h-4 w-4 text-gray-400" />
						<div className="flex flex-wrap gap-1">
							{tags.map((tag, index) => (
								<Badge key={index} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
					</div>
				)}
			</CardContent>
			<CardFooter className="flex justify-between">
				<div className="space-x-2">
					{isEditing ? (
						<Button onClick={handleSave}>Save</Button>
					) : (
						<Button onClick={handleEdit}>Edit</Button>
					)}
					<Button variant="destructive" onClick={handleDelete}>
						Delete
					</Button>
				</div>
				<Button
					onClick={handleToggle}
					variant={completed ? "outline" : "default"}
				>
					{completed ? "Mark Incomplete" : "Mark Complete"}
				</Button>
			</CardFooter>
		</Card>
	);
};
