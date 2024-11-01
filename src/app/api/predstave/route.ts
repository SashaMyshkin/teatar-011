import { runQuery } from "@/lib/db/executor";
import { sqlRepertoire } from "@/lib/db/queries/performances";
import { Play } from "@/lib/db/models/Play";
import { NextResponse } from "next/server";
import { RowDataPacketPlayAdapter } from "@/lib/Adapters/RowDataPacketPlayAdapter";


export async function GET() {

    
    const result = await runQuery(sqlRepertoire);

    if(result.hasError) {
        return NextResponse.json(result, { status: 500 });
    }

    const feedback: Feedback<Play[]> = {
        hasError: false,
        data: result.data?.[0] ? (new RowDataPacketPlayAdapter(result.data[0])).toPlays()  : [],
    };

    return NextResponse.json(feedback);
   
    
}

