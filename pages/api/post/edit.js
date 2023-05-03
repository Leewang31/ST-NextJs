import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let newData = { title: req.body.title, content: req.body.content };
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: newData });

    res.status(200).redirect("/list");
  }
}
