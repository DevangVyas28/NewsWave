"use client";

import Image from "next/image";
import { useState } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import { UserAuth } from "./context/AuthContext";
import fetchNews from "./lib/fetchNews";
export default function Home() {
  const { user } = UserAuth();
  const [data, setData] = useState(null);
  console.log(data);
  const handleClick = async () => {
    const newData = await fetchNews();
    setData(newData.articles);
  };

  // console.log("this" + JSON.stringify(data));
  return (
    <main className="p-4">
      {!user ? (
        <h1>Please login</h1>
      ) : (
        <div className="w-full flex items-center">
          <p className=" cursor-pointer" onClick={handleClick}>
            Fetch News
          </p>
        </div>
      )}
      {data != null && user ? (
        <div className="grid grid-cols-2 ">
          {data.map((news) => {
            return (
              <div className="m-4">
                <NewsCards
                  title={news.title}
                  description={news.description}
                  imgUrl={news.urlToImage}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </main>
  );
}
