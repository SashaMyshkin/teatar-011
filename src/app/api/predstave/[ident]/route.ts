import { runQuery } from "@/lib/db/executor";
import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";
import { sqlPerformance } from "@/lib/db/queries/performances";


export async function GET(request: NextRequest, { params }: { params: { ident: string } }) {
	const { ident } = params;

	const result = await runQuery(sqlPerformance, [ident]);

	if (result.hasError) {
		return NextResponse.json(result, { status: 500 });
	}

	const feedback: Feedback<RowDataPacket[]> = {
		hasError: false,
		data: result.data?.[0] ? result.data[0] : [],
	};

	return NextResponse.json(feedback);


}

