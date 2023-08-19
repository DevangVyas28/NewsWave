import React from "react";

const NewsCards = ({ source, title, description, imgUrl, gridView }) => {
  return (
    <div>
      {gridView ? (
        <div className="h-[60vh] w-full px-4 py-2 bg-white text-black flex flex-col items-center rounded-xl border-2 transition ease-in-out delay-100 shadow-[1px_1px_8px_0px_rgba(58, 58, 58, 0.25)] hover:shadow-[10px_8px_1px_0px_#7A7A7A]  text-justify">
          <div className="my-4 h-1/2 w-full p-2 text-center font-serif">
            <img
              className="h-full w-full object-fit rounded-lg"
              src={imgUrl}
              alt="news"
            />
          </div>
          <div className="h-1/2 w-full p-4">
            <h1 className="mb-4 md:text-xl text-lg line-clamp-2 font-bold font-serif leading-tight">
              {title}
            </h1>
            <div className="h-1/3">
              <p className="my-2  text-sm text-slate-700 line-clamp-3 font-sans">
                {description ? (
                  description
                ) : (
                  <p className="italic">
                    Looks like we dont have any description for this Article
                  </p>
                )}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <p className="italic font-light text-sm text-black">
                Source: {source}{" "}
              </p>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      ) : (
        <div className="h-[35vh] w-full p-4 bg-white text-black flex items-center rounded-xl border-2 transition ease-in-out delay-100 shadow-[1px_1px_8px_0px_rgba(58, 58, 58, 0.25)] hover:shadow-[10px_8px_1px_0px_#7A7A7A] ">
          <div className="h-full w-1/2 p-2">
            <img
              className="h-full w-full object-fit rounded-lg"
              src={imgUrl}
              alt="news"
            />
          </div>
          <div className="h-full w-1/2 p-4">
            <div className="mb-2 h-1/2">
              <h1 className="mb-4 md:text-2xl text-lg line-clamp-3 font-bold font-serif leading-tight">
                {title}
              </h1>
            </div>
            <div className="mt-2 h-1/3">
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
            <div className="mt-4 flex justify-end">
              <p className="italic text-sm font-light text-black">
                Source: {source}{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCards;
