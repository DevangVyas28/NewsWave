"use client";

import Image from "next/image";
import { useState } from "react";
import NewsViewModal from "./components/Modal/NewsViewModal";
import NewsCards from "./components/NewsCards/NewsCards";
import { UserAuth } from "./context/AuthContext";
import fetchNews from "./lib/fetchNews";
export default function Home() {
  const { user } = UserAuth();
  const [data, setData] = useState(null);
  const [gridView, setGridView] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentOpenNews, setCurrentOpenNews] = useState(null);
  console.log(data);
  const handleClick = async () => {
    const newData = await fetchNews();
    setData(newData.articles);
  };

  const openModal = (openNews) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setModalOpen(true);
    setCurrentOpenNews(openNews);
  };

  // console.log("this" + JSON.stringify(data));
  return (
    <div>
      {modalOpen ? (
        <NewsViewModal
          setModalOpen={setModalOpen}
          currentOpenNews={currentOpenNews}
        />
      ) : null}

      <main className="p-4">
        {!user ? (
          <h1>Please login</h1>
        ) : (
          <div className="w-full flex items-center justify-between ">
            <p className=" cursor-pointer" onClick={handleClick}>
              Fetch News
            </p>
            {data != null ? (
              <button
                onClick={() => setGridView(!gridView)}
                className="w-24 h-8 bg-slate-400"
              >
                {gridView ? "list view" : "grid view"}
              </button>
            ) : null}
          </div>
        )}
        {data != null && user ? (
          <div className={gridView ? "grid grid-cols-3 " : "grid grid-cols-2 "}>
            {data.map((news) => {
              return (
                <div className="m-4" onClick={() => openModal(news)}>
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
    </div>
  );
}
