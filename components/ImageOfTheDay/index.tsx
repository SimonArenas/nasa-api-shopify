import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

import { addFavorites, isFavorited, removeFavorite } from "../../utils";

const ImageOfTheDay = ({ data }: any) => {
  const { copyright, date, explanation, title, url } = data;
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (id: any) => {
    setFavorite(!favorite);

    !favorite ? addFavorites(data) : removeFavorite(id);
  };

  useEffect(() => {
    isFavorited(data) && setFavorite(true);
  }, [data]);

  if (data.code === 400) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-orange tracking-wide uppercase">
              Error
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
              We can&apos;t find any photo with date provided 😔
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {data.msg}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {data.date && (
        <div className="relative bg-white">
          <div className="h-56 bg-green sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
            <img
              className="w-full h-full object-cover"
              src={url}
              alt="Date selected"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
            <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
              <div className="flex items-center">
                <h2 className="text-3xl font-extrabold text-orange sm:text-4xl">
                  {title}
                </h2>
                <button
                  type="button"
                  onClick={() => handleFavorite(data)}
                  className="ml-4 py-3 px-3 rounded-md flex items-center justify-center hover:bg-gray-100
                 "
                >
                  {favorite ? (
                    <HeartIconSolid
                      className="h-6 w-6 flex-shrink-0 hover:text-gray-500 text-red-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0 hover:text-gray-500 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <p className="mt-6 text-lg text-gray-500">{explanation}</p>
              <div className="mt-8 overflow-hidden">
                <dl className="-mx-8 -mt-8 flex flex-wrap">
                  {copyright && (
                    <div className="flex flex-col px-8 pt-8">
                      <dt className="order-2 text-base font-medium text-gray-500">
                        Copyright
                      </dt>
                      <dd className="order-1 text-2xl font-extrabold text-green-600 sm:text-3xl">
                        {copyright}
                      </dd>
                    </div>
                  )}
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      Date
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-green-600 sm:text-3xl">
                      {date}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageOfTheDay;
