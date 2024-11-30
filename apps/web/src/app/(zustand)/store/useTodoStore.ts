import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { subscribeWithSelector } from "zustand/middleware";

export interface ITodo {
	id: string;
	title: string;
	completed: boolean;
	description: string;
	dueDate: Date;
	priority?: "low" | "medium" | "high";
	tags?: string[];
}

export interface ITodoState {
	todos: ITodo[] | [];
	selectedTodoId: string | null;
}

export interface ITodoActions {
	getAllTodos: () => ITodo[];
	addTodo: (todo: ITodo) => void;
	toggleTodo: (id: string) => void;
	removeTodo: (id: string) => void;
	updateTodo: (id: string, changes: Partial<ITodo>) => void;
	selectTodo: (id: string | null) => void;
}

export const initialTodos: ITodo[] = [];

export const useTodoStore = create<ITodoState & ITodoActions>()(
	subscribeWithSelector(
		persist(
			devtools(
				immer((set, get) => ({
					todos: initialTodos,
					selectedTodoId: null,
					getAllTodos: () => get().todos,
					selectTodo: (id: string | null) =>
						set((state) => ({ ...state, selectedTodoId: id })),
					addTodo: (todo: ITodo) =>
						set((state) => ({ todos: [...state.todos, todo] })),
					toggleTodo: (id: string) =>
						set((state) => ({
							todos: state.todos.map((todo) =>
								todo.id === id ? { ...todo, completed: !todo.completed } : todo
							),
						})),
					removeTodo: (id: string) =>
						set((state) => ({
							todos: state.todos.filter((todo) => todo.id !== id),
						})),
					updateTodo: (id: string, changes: Partial<ITodo>) =>
						set((state) => ({
							todos: state.todos.map((todo) =>
								todo.id === id ? { ...todo, ...changes } : todo
							),
						})),
				})),
				{
					enabled: true,
					store: "TodoStore",
					anonymousActionType: "todo",
					name: "Todo Store",
				}
			),
			{
				name: "todos",
				skipHydration: true,
				version: 1,
				onRehydrateStorage: (state) => {
					console.log("Rehydrated state:", state);
				},
			}
		)
	)
);
