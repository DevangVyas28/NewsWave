import React from "react";

const NewsCards = ({ title, description, imgUrl }) => {
  return (
    <div className="h-48 w-full bg-slate-300 text-black flex items-center  ">
      <div className="h-full w-1/2 p-2">
        <img className="h-full w-full object-fit" src={imgUrl} alt="news" />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="mb-4 text-lg font-bold ">{title}</h1>
        <p className="text-sm text-slate-700 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default NewsCards;
