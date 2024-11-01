declare namespace NodeJS {
    interface ProcessEnv {
        DB_HOST:string;
        DB_PORT:number;
        DB_NAME:string;
        DB_USER:string;
        DB_PASS:string; 
        DB_CONNECTION_LIMIT:number;
        DB_MAX_IDLE:number;
        DB_IDLE_TIMEOUT:number;
        NEXT_PUBLIC_BASE_URL:string;
        
    }
} 