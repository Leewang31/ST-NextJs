import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let db = (await connectDB).db("forum");
  let findData = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.query.id) })
    .toArray();
  res.status(200).json(findData);
}
