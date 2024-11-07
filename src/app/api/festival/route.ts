import { runQuery } from "@/lib/db/executor";
import { sqlRepertoire } from "@/lib/db/queries/performances";
import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";


export async function GET() {

    
    const result = await runQuery(sqlRepertoire);

    if(result.hasError) {
        return NextResponse.json(result, { status: 500 });
    }

    const feedback: Feedback<RowDataPacket[]> = {
        hasError: false,
        data: result.data?.[0] ? result.data[0] : [],
    };

    return NextResponse.json(feedback);
   
    
}

