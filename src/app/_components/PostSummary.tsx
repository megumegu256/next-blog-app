"use client";
import type { Post } from "@/app/_types/Post";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faSort,
  faPlus,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  const dtFmt = "YYYY-MM-DD HH:mm";
  const safeHTML = DOMPurify.sanitize(post.content, {
    ALLOWED_TAGS: ["b", "strong", "i", "em", "u", "br"],
  });
  return (
    <div className="rounded-md border border-slate-400 bg-cyan-700 p-3 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <FontAwesomeIcon icon={faCalendar} />
          <div>{dayjs(post.createdAt).format(dtFmt)}</div>
        </div>
        <div className="flex space-x-1.5">
          {post.categories.map((category) => (
            <div
              key={category.id}
              className={twMerge(
                "rounded-md px-2 py-0.5",
                "text-xs font-bold",
                "border border-slate-400 bg-white text-slate-500"
              )}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
      <Link href={`/posts/${post.id}`}>
        <div className="mb-1 text-lg font-bold">{post.title}</div>
        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: safeHTML }}
        />
      </Link>
    </div>
  );
};

export default PostSummary;
