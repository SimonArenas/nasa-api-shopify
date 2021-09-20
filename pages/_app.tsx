import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { useEffect, useMemo, useState } from "react";

import { getTodaysPhoto } from "../api";
import DataContext from "../context/DataContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [apiData, setApiData] = useState({});
  const [showPhoto, setShowPhoto] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstFetchCached, setIsFirstFetchCached] = useState(true);

  useEffect(() => {
    getTodaysPhoto().then((data) => setApiData(data));
  }, []);

  const data = useMemo(
    () => ({
      data: apiData,
      setData: setApiData,
      showPhoto,
      setShowPhoto,
      showCalendar,
      setShowCalendar,
      isLoading,
      setIsLoading,
      isFirstFetchCached,
      setIsFirstFetchCached,
    }),
    [
      apiData,
      setApiData,
      showPhoto,
      setShowPhoto,
      showCalendar,
      setShowCalendar,
      isLoading,
      setIsLoading,
      isFirstFetchCached,
      setIsFirstFetchCached,
    ]
  );

  return (
    <DataContext.Provider value={data}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export default MyApp;
