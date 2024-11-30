"use client";

import { useShallow } from "zustand/shallow";
import { ITodo, useTodoStore } from "../store/useTodoStore";
import { Todo } from "../components/Todo";
import { Button } from "@arun/ui/components/ui/button";
import { generateUniqueId } from "@/utils";
import { useEffect, useState } from "react";

const TodosPage = () => {
	const [isMounted, setIsMounted] = useState(false);
	const DefaultTodoList: ITodo[] = [
		{
			id: generateUniqueId(),
			title: "Buy groceries",
			completed: false,
			description: "Milk, eggs, bread",
			dueDate: new Date("2022-12-31"),
			priority: "medium",
			tags: ["shopping", "important"],
		},
		{
			id: generateUniqueId(),
			title: "Complete homework",
			completed: false,
			description: "Math, science, English",
			dueDate: new Date("2023-01-15"),
			priority: "high",
			tags: ["school", "work"],
		},
	];
	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const todos = useTodoStore(useShallow((state) => state.todos));

	if (!isMounted) return null;

	return (
		<div className="flex flex-col gap-4 px-6 py-8">
			<div className="flex justify-between flex-row flex-wrap gap-3 items-center mb-4">
				<Button
					variant="outline"
					onClick={() => {
						DefaultTodoList.map((t) => {
							useTodoStore.getState().addTodo(t);
						});
					}}
				>
					Add Todos
				</Button>
			</div>
			<div className="flex flex-row flex-wrap gap-4 justify-start">
				{todos.map((todo) => (
					<Todo key={todo.id} {...todo} />
				))}
			</div>
		</div>
	);
};

export default TodosPage;
