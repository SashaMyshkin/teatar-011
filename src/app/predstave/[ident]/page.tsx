import AboutPerformance from "@/app/components/AboutPerformance"
import { PlayAdapter } from "@/lib/Adapters/PlayAdapter";

export default async function Page({
	params,
}: {
	params: Promise<{ ident: string }>
}) {
	const ident  = (await params).ident;

	const resPlay = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/predstave/${ident}`, {
		cache: 'no-store', // to disable caching in dev
		method: 'GET'
	});

	const resultPlay = await resPlay.json();

	const play = new PlayAdapter(resultPlay.data).adapt();

	const resAbout = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/predstave/${ident}/o-predstavi`, {
		cache: 'no-store', // to disable caching in dev
		method: 'GET'
	});

	const resultAbout = await resAbout.json();
	

	return (<></>)
}