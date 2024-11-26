import { Button } from "@arun/ui/components/ui/button";
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center gap-4 p-4">
			<h1 className="text-4xl font-bold">Hello world</h1>
			<Button variant={"destructive"}>Hello World</Button>
		</main>
	);
}
