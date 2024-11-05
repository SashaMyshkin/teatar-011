import { runQuery } from "@/lib/db/executor";
import { sqlRoles } from "@/lib/db/queries/roles";
import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";

export async function GET(request:NextRequest) {

    const url =  new URL(request.nextUrl);
    const performanceIdentifier = url.searchParams.get('performanceIdentifier') ?? '';
    const memberIdentifier = url.searchParams.get('memberIdentifier') ?? '';
    
    const result = await runQuery(sqlRoles, [performanceIdentifier, memberIdentifier]);

    if(result.hasError) {
        return NextResponse.json(result, { status: 500 });
    }

    /*const feedback: Feedback<RowDataPacket[]> = {
        hasError: false,
        data: result.data?.[0] ? result.data[0] : [],
    };*/

    return NextResponse.json(result.data?.[0]);
   
    
}

