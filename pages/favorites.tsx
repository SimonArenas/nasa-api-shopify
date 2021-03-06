import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { TodaysPhoto } from "../types";
import { getFavorites, removeFavorite } from "../utils";

const Favorites = () => {
  const [favorites, setFavorites] = useState<TodaysPhoto[]>([]);
  const [favoritesUpdated, setFavoritesUpdated] = useState(false);

  useEffect(() => {
    setFavorites(getFavorites());
  }, [favoritesUpdated]);

  const removeFromFavorites = (favorite: any) => {
    removeFavorite(favorite);
    setFavoritesUpdated(!favoritesUpdated);
  };

  return (
    <>
      <Head>
        <title>Space wander 🚀 | Favorites</title>
      </Head>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-green sm:text-4xl">
              Your favorite photos
            </h2>
            {favorites.length > 0 && (
              <p className="font-mono mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                I see Earth!
              </p>
            )}

            {favorites.length === 0 && (
              <div className="pt-6">
                <p className="font-mono mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  There are not any images on your favorites yet. <br />
                </p>
                <Link href="/">
                  <a>
                    <p className="font-mono mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 underline cursor-pointer">
                      I want to browse images.
                    </p>
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {favorites.map((favorite) => (
              <div
                key={favorite.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={favorite.url}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold text-orange-700">
                        {favorite.title}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeFromFavorites(favorite)}
                        className="ml-4 py-3 px-3 rounded-md flex items-center justify-center hover:bg-gray-100
                 "
                      >
                        <HeartIconSolid
                          className="h-6 w-6 flex-shrink-0 hover:text-gray-500 text-red-500"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <p className="mt-3 text-base text-gray-500">
                      {favorite.explanation}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{favorite.copyright}</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {favorite.copyright}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={favorite.date}>{favorite.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
