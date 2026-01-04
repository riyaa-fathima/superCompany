import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://riyafathima9889_db_user:ISnuDDPxWdDyn296@cluster0.oh2nlol.mongodb.net/greentiq_dashboard";

if (!MONGODB_URI) {
  throw new Error("MongoDB connection string is missing");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "greentiq_dashboard",
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}
