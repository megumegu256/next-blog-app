"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-5 text-2xl font-bold">About</div>

      <div
        className={twMerge(
          "mx-auto mb-5 w-full md:w-2/3",
          "flex justify-center"
        )}
      >
        <Image
          src="/apple-icon.png"
          alt="Example Image"
          width={350}
          height={0} // Auto height (アスペクト比を保持)
          priority
          className=" border-4 border-slate-500 p-1.5"
        />
      </div>

      <div className="space-y-3">
        <div className="md:flex md:justify-center">
          <div className="font-bold md:w-1/6 md:text-center">名 前</div>
          <div className="md:w-5/6">富永 恵</div>
        </div>
        <div className="md:flex md:justify-center">
          <div className="font-bold md:w-1/6 md:text-center">
            ポートフォリオ
          </div>
          <div className="md:w-5/6">
            <a
              href="https://megumegu256.github.io/portfolio/portfolio.html"
              className="mr-1 text-blue-500 underline"
            >
              Megu&apos;s Portfolio
            </a>
            (GitHub Pages)
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
