"use client";
import type { Post } from "@/app/_types/Post";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  const safeHTML = post.content;
  return (
    <div className="border border-slate-400 p-3">
      <Link href={`/posts/${post.id}`}>
        <div className="mb-1 text-lg font-bold">{post.title}</div>
        <div className="text-slate-500">
          {new Date(post.createdAt).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="text-slate-500">{post.categories[0].name}</div>
        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: safeHTML }}
        />
      </Link>
    </div>
  );
};

export default PostSummary;
