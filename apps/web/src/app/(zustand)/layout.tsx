import { Metadata } from "next";
import Hydration from "./components/hydration";

export const metadata: Metadata = {
	title: "Todos",
	description: "View and manage your todos",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-4 px-6 py-8">
			<Hydration/>
			{children}
		</div>
	)
}
