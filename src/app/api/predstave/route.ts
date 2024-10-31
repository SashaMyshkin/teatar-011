import { runQuery } from "@/lib/db/executor";
import { sqlRepertoire } from "@/lib/db/queries/performances";
import { Play } from "@/lib/Play";
import { NextResponse } from "next/server";


export async function GET() {

    
    const result = await runQuery(sqlRepertoire);

    if(result.hasError) {
        return NextResponse.json(result, { status: 500 });
    }

    const feedback: Feedback<Play[]> = {
        hasError: false,
        data: result.data?.[0] ? result.data[0] as Play[] : [],
    };

    return NextResponse.json(feedback);
   
    
}

