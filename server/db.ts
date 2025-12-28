import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres-js";
import * as schema from "@shared/schema";

const client = postgres(process.env.DATABASE_URL || "postgresql://localhost:5432/suss-sis");
export const db = drizzle(client, { schema });
