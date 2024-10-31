/*import { pool } from "@/lib/db/pool";

export async function runQuery(query:string, params = []) {
    let conn;
    try {
        conn = await pool.getConnection();
        const [data] = await conn.execute(query, params);
        return data;
    } catch (error) {
        console.error("Database query error:", error);
        throw error; // Rethrow the error for higher-level handling
    } finally {
        if (conn) {
            conn.unprepare(query)
            conn.release();

        }
    }
}*/