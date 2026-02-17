import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.on("connect", () => {
  console.log("Database connected successfully");
});

db.on("error", (err) => {
  console.error("Unexpected database error:", err);
  process.exit(-1);
});
