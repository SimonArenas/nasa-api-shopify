import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import DataContext from "../context/DataContext";
import { useEffect, useMemo, useState } from "react";
import { getTodaysPhoto } from "../api";

function MyApp({ Component, pageProps }: AppProps) {
  const [apiData, setApiData] = useState({});
  const [showPhoto, setShowPhoto] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

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
    }),
    [
      apiData,
      setApiData,
      showPhoto,
      setShowPhoto,
      showCalendar,
      setShowCalendar,
    ]
  );

  return (
    <DataContext.Provider value={data}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export default MyApp;
