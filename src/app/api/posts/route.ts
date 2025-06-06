import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { Post } from "@prisma/client";

export const revalidate = 0;

export const GET = async (req: NextRequest) => {
  try {
    // const posts: Post[] = await prisma.post.findMany({
    //   orderBy: {
    //     createdAt: "desc",
    //   },
    // });

    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        categories: {
          select: {
            category: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "投稿記事の一覧の取得に失敗しました" },
      { status: 500 }
    );
  }
};

// import prisma from "@/lib/prisma";
// import { NextResponse, NextRequest } from "next/server";
// import { Prisma } from "@prisma/client";

// // Postに関して取得するカラムを指定
// const postSelectOptions = {
//   select: {
//     id: true,
//     title: true,
//     content: true,
//     coverImageURL: true,
//     createdAt: true,
//     categories: {
//       select: {
//         category: {
//           select: {
//             id: true,
//             name: true,
//           },
//         },
//       },
//     },
//   },
// } as const;

// // postSelectOptionsを指定したときの戻り値の「型」を定義
// type PostWithCategories = Prisma.PostGetPayload<typeof postSelectOptions>;

// export const GET = async (req: NextRequest) => {
//   try {
//     const posts: PostWithCategories[] = await prisma.post.findMany({
//       ...postSelectOptions, // スプレッド構文でオプションを展開
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return NextResponse.json(posts);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "投稿記事の一覧の取得に失敗しました" },
//       { status: 500 }
//     );
//   }
// };
