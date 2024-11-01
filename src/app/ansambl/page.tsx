import { ActorAdapter } from "@/lib/Adapters/ActorAdapter";
import CardGrid from "@/app/components/CardGrid";
import { CardAdapter } from "@/lib/Adapters/CardAdapter";

const Ansambl = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ansambl/`, {
        cache: 'no-store', // to disable caching in dev
        method: 'GET'
    });

    const result = await res.json();
    const actors = new ActorAdapter(result.data).adapt();
    const cards = new CardAdapter(actors).adapt();

    
    return (
        <CardGrid propsDataSet={cards} />
    );
};

// Export as default
export default Ansambl;
