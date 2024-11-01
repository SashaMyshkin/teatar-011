
import { Play } from "@/lib/db/models/Play";
import Card from "@/app/components/Card";
import { CardAdapter } from "@/lib/Adapters/CardAdapter";

export default function CardGrid({propsDataSet}: PropsSet<Card>) {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-center">
            {
                
                propsDataSet.map(elem =>{
                    return (
                        <div  className="max-w-sm h-fit mx-auto"><Card propsData={elem}></Card></div>
                    )
                }
                    
                )
            }
        </div>
    )

}


