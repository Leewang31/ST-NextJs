"use client";
import { useEffect, useState } from "react";

export default function Comment({ _id }) {
  let [comment, setComment] = useState("");
  let [commentList, setCommentList] = useState([]);

  const loadFunction = () => {
    fetch("/api/comment/load?id=" + _id)
      .then((r) => r.json())
      .then((r) => setCommentList(r));
  };
  useEffect(() => {
    loadFunction();
  }, []);

  return (
    <div>
      <div>댓글이 보여질 부분</div>
      {commentList.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          {commentList.map((el, idx) => (
            <div key={idx}>
              {el.author} : {el.content}
            </div>
          ))}
        </>
      )}
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment, _id }),
          }).then(() => {
            loadFunction();
            setComment("");
          });
        }}
      >
        comment
      </button>
    </div>
  );
}
