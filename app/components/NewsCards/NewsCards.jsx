import React from "react";

const NewsCards = ({ title, description, imgUrl }) => {
  return (
    <div className="h-48 w-full bg-slate-300 text-black flex items-center rounded-lg border-2 shadow-lg shadow-slate-500 text-justify">
      <div className="h-full w-1/2 p-2">
        <img
          className="h-full w-full object-fit rounded-lg"
          src={imgUrl}
          alt="news"
        />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="mb-4 text-2xl sm:line-clamp-3 font-bold font-serif leading-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-700 line-clamp-3 font-sans">
          {description ? (
            description
          ) : (
            <p className="italic">
              Looks like we dont have any description for this Article
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCards;
