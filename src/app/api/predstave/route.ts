import { pool } from "@/lib/db/pool";
import { sqlRepertoire } from "@/lib/db/queries/repertoire";
import { NextResponse } from "next/server";


export async function GET() {

    let conn;

    try {
        conn = await pool.getConnection();
        const [data] = await conn.execute(sqlRepertoire);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to retrieve performances" }, { status: 500 });
    } finally {
        if (conn) {
            conn.unprepare(sqlRepertoire);
            conn.release();
        }
    }
}

