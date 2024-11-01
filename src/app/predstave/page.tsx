import { PlayAdapter } from "@/lib/Adapters/PlayAdapter";
import CardGrid from "@/app/components/CardGrid";
import { CardAdapter } from "@/lib/Adapters/CardAdapter";

const Predstave = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/predstave/`, {
        cache: 'no-store', // to disable caching in dev
        method: 'GET'
    });

    const result = await res.json();
    const plays = new PlayAdapter(result.data).adapt();
    const cards = new CardAdapter(plays).adapt();

    
    return (
        <CardGrid propsDataSet={cards} />
    );
};

// Export as default
export default Predstave;
