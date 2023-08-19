import React from "react";
import { likedNews } from "@/app/lib/firebaseDB";
import { UserAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";
import { AiFillLike } from "react-icons/ai";

const NewsViewModal = ({ setModalOpen, currentOpenNews }) => {
  const { user } = UserAuth();
  const closeModal = (event) => {
    if (event.key === "Escape") {
      setModalOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  }, []);

  const addToDatabase = async (userId, title, imgUrl, description, url) => {
    await likedNews(userId, title, imgUrl, description, url);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 ">
      <div className="container mt-8 mx-auto max-w-2xl h-[80vh] rounded-3xl bg-slate-800 py-6 px-4 z-100 text-white">
        <div className="-mt-4 -mr-6 w-full flex items-center justify-end">
          <button
            onClick={() => setModalOpen(false)}
            className="w-10 h-10 mb-4 font-bold rounded-full"
          >
            X
          </button>
        </div>
        <div className="mb-16 w-4/5 mx-auto text-center">
          <h1 className="text-2xl font-bold">{currentOpenNews.title}</h1>
        </div>
        <div className="m-4 w-full flex items-center justify-evenly">
          <div className="w-1/2 p-2">
            <img src={currentOpenNews.image_url} alt="news" />
          </div>
          <div className="mr-4 w-1/2 p-2 text-justify">
            <p>{currentOpenNews.description}</p>
            <div className="mt-4 w-full flex justify-end italic">
              <p>Source - {currentOpenNews.source_id}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-full mx-auto flex items-center justify-center">
            <a
              className="w-1/5 mr-8 flex items-center "
              href={currentOpenNews.link}
              target="_blank"
            >
              <button className="w-full h-14 rounded-md bg-yellow-400 text-black">
                Read more
              </button>
            </a>
            <div className="h-8 w-8 cursor-pointer bg-[#00B099] flex items-center justify-center rounded-lg">
              <AiFillLike
                size={28}
                onClick={() =>
                  addToDatabase(
                    user.uid,
                    currentOpenNews.title,
                    currentOpenNews.image_url,
                    currentOpenNews.description,
                    currentOpenNews.link
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsViewModal;
