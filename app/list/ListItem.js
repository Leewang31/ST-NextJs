"use client";

import Link from "next/link";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((el, idx) => (
        <div className="list-item" key={idx}>
          <Link prefetch={false} href={`/detail/${el._id}`}>
            <h4>{props.result[idx].title}</h4>
          </Link>
          <Link href={`/edit/${el._id}`}>✏️</Link>
          <span
            className="list-item-delete"
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: el._id,
              }).then((r) => {
                if (r.status === 200) {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                }
              });
            }}
          >
            🗑️
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
