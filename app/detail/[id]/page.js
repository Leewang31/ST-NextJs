import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
import Comment from "@/app/detail/[id]/Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
  let db = (await connectDB).db("forum");
  let params = props.params.id;
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params) });
  if (result === null) {
    return notFound();
  }

  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment _id={result._id.toString()} />
    </div>
  );
}
