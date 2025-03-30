import Database from "better-sqlite3";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // ✅ Connect to SQLite Database
    const db = new Database("messages.db", { verbose: console.log });

    //Store in database
    try {
      // ✅ Create messages table if not exists
      db.prepare(
        `
          CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            name TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `
      ).run();

      // ✅ Insert the message into the database
      const stmt = db.prepare(
        "INSERT INTO messages (email, name, message) VALUES (?, ?, ?)"
      );
      stmt.run(email, name, message);

      db.close(); // Close the database connection

      return res
        .status(201)
        .json({ message: "Your message has been saved successfully" });
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ message: "Internal server error" });
    } finally {
      if (db.open) db.close(); // Ensure DB is closed in case of errors
    }
  }

  // ✅ Handle other HTTP methods
  return res.status(405).json({ message: "Method Not Allowed" });
}
