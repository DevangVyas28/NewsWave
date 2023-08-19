"use client";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import NewsCards from "../components/NewsCards/NewsCards";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const page = () => {
  const { user } = UserAuth();
  const [likedNews, setLikedNews] = useState([]);

  const getLikedNews = () => {
    getDocs(collection(db, "liked-news")).then((data) => {
      setLikedNews(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getLikedNews();
  }, []);
  return (
    <div>
      <div>
        <p className="m-6 text-4xl font-sans">Favourites</p>
      </div>
      {likedNews != null ? (
        <div className="grid grid-cols-2">
          {likedNews.map((news) => {
            return user.uid === news.user ? (
              <div className="m-4">
                <NewsCards
                  title={news.title}
                  description={news.description}
                  imgUrl={news.imgUrl}
                />
              </div>
            ) : null;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default page;
