import React from "react";
import { likedNews } from "@/app/lib/firebaseDB";
import { UserAuth } from "@/app/context/AuthContext";
const NewsViewModal = ({ setModalOpen, currentOpenNews }) => {
  const { user } = UserAuth();
  const addToDatabase = async (userId, title, imgUrl, description, url) => {
    alert(userId);
    await likedNews(userId, title, imgUrl, description, url);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 ">
      <div className="container mt-8 mx-auto max-w-2xl h-[80vh] rounded-3xl bg-slate-800 py-6 px-4">
        <button
          onClick={() => setModalOpen(false)}
          className="w-10 h-10 mb-4 font-bold rounded-full bg-slate-300"
        >
          X
        </button>
        <div className="w-4/5 mx-auto text-center">
          <h1 className="text-lg font-bold">{currentOpenNews.title}</h1>
        </div>
        <div className="m-4 w-full flex items-center justify-evenly">
          <div className="w-1/2 p-2">
            <img src={currentOpenNews.urlToImage} alt="news" />
          </div>
          <div className="w-1/2 p-2">
            <p>{currentOpenNews.description}</p>
          </div>
        </div>

        <div className="w-full mx-auto flex items-center justify-center">
          <button className="w-1/3 h-14 rounded-md bg-yellow-400 text-black">
            <a href={currentOpenNews.url} target="_blank">
              Read more
            </a>
          </button>
          <button
            className="w-10 h-10 m-4 font-bold bg-slate-300"
            onClick={() =>
              addToDatabase(
                user.uid,
                currentOpenNews.title,
                currentOpenNews.urlToImage,
                currentOpenNews.description,
                currentOpenNews.url
              )
            }
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsViewModal;
