"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-2 text-2xl font-bold">管理者用機能の一覧</div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link className="text-blue-500 underline" href="/admin/posts">
            /admin/posts - 投稿記事の管理
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link className="text-blue-500 underline" href="/admin/posts/new">
            /admin/posts/new - 投稿記事の新規作成
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link className="text-blue-500 underline" href="/admin/categories">
            /admin/categories - カテゴリの管理
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
          <Link
            className="text-blue-500 underline"
            href="/admin/categories/new"
          >
            /admin/categories/new - カテゴリの新規作成
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
