import { pool } from "@/lib/db/pool";
import { FieldPacket, RowDataPacket } from "mysql2/promise";

export async function runQuery(query:string):Promise<Feedback<[RowDataPacket[], FieldPacket[]]>> {
    let conn;

    const feedback:Feedback<[RowDataPacket[], FieldPacket[]]> = {
        hasError: false
    }

    try {
        conn = await pool.getConnection();
        const result = await conn.execute<RowDataPacket[]>(query);
        feedback.data = result;
        conn.unprepare(query)
       
    } catch (error) {
        feedback.hasError = true;
        feedback.errorDetail = error;
        feedback.developerMessage = "Database error in lib/db/executor.ts, function runQuery: Potential issue with database connection or query syntax.";
    } finally {
        if (conn) {
            conn.release();
        }
    }

    return feedback;
}