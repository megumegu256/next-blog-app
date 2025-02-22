"use client";
import { useState, useEffect } from "react";
import type { Post } from "@/app/_types/Post";
import type { PostApiResponse } from "@/app/_types/PostApiResponse";
import PostSummary from "@/app/_components/PostSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSort, faGears } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Page: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // microCMS から記事データを取得
        const requestUrl = `/api/posts`;
        const response = await fetch(requestUrl, {
          method: "GET",
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const postResponse: PostApiResponse[] = await response.json();
        setPosts(
          postResponse.map((rawPost) => ({
            id: rawPost.id,
            title: rawPost.title,
            content: rawPost.content,
            coverImage: {
              url: rawPost.coverImageURL,
              width: 1000,
              height: 1000,
            },
            createdAt: rawPost.createdAt,
            categories: rawPost.categories.map((category) => ({
              id: category.category.id,
              name: category.category.name,
            })),
          }))
        );
      } catch (e) {
        setFetchError(
          e instanceof Error ? e.message : "予期せぬエラーが発生しました"
        );
      }
    };
    fetchPosts();
  }, []);

  const handleSort = () => {
    setPosts((prevPosts) => {
      if (!prevPosts) return null;
      const sortedPosts = [...prevPosts].sort((a, b) =>
        isSorted
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return sortedPosts;
    });
    setIsSorted(!isSorted);
  };

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  if (!posts) {
    return (
      <div className="text-gray-500">
        <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
        Loading...
      </div>
    );
  }

  return (
    <main>
      <div className="text-2xl font-bold">投稿記事一覧</div>
      <div className="mb-1 flex justify-end space-x-1.5">
        <button
          type="button"
          className={twMerge(
            "rounded-md px-5 py-1 font-bold",
            "bg-green-600 text-white hover:bg-green-700",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          onClick={handleSort}
        >
          投稿時間でソート |
          <FontAwesomeIcon icon={faSort} className="ml-1 text-white" />
        </button>
        <Link
          href="/admin"
          className={twMerge(
            "rounded-md px-5 py-1 font-bold",
            "bg-purple-600 text-white hover:bg-purple-700",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          管理者機能 |
          <FontAwesomeIcon icon={faGears} className="ml-1 text-white" />
        </Link>
      </div>
      <div className="space-y-3">
        {posts.map((post) => (
          <PostSummary key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Page;
