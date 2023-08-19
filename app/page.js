"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    async function fetchData() {
      const data = await fetchNews();
      setData(data.results);
    }
    fetchData();
    console.log(data);
  }, []);

  const openModal = (openNews) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setModalOpen(true);
    setCurrentOpenNews(openNews);
  };

  // console.log("this" + JSON.stringify(data));
  return (
    <div className="text-black font-sans">
      {modalOpen ? (
        <NewsViewModal
          setModalOpen={setModalOpen}
          currentOpenNews={currentOpenNews}
        />
      ) : null}

      <main className="p-4">
        {!user ? <h1>Please login</h1> : null}
        {data != null && user ? (
          <div>
            <div className=" w-full flex items-center justify-between">
              <p className="m-6 text-4xl font-sans">News Headlines</p>
              <div className="mr-4">
                {/* <button
              className="w-44 h-8 bg-slate-400 rounded-lg"
              // onClick={handleClick}
            >
              Get Latest Headlines
            </button> */}
                {data != null ? (
                  <button
                    onClick={() => setGridView(!gridView)}
                    className="w-24 h-8 bg-[#00B099] rounded-lg font-sans"
                  >
                    {gridView ? "list view" : "Grid view"}
                  </button>
                ) : null}
              </div>
            </div>
            <div
              className={
                gridView
                  ? "grid grid-cols-3 "
                  : "grid grid-cols-1 lg:grid-cols-2"
              }
            >
              {data.map((news) => {
                return (
                  <div
                    className="m-4 cursor-pointer"
                    onClick={() => openModal(news)}
                  >
                    <NewsCards
                      source={news.source_id}
                      title={news.title}
                      description={news.description}
                      imgUrl={news.image_url}
                      gridView={gridView}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
