import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import { useMemo, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DataContext from "../context/DataContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [apiData, setApiData] = useState({});
  const [showPhoto, setShowPhoto] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Data provider
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
    ]
  );

  return (
    <DataContext.Provider value={data}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </DataContext.Provider>
  );
}

export default MyApp;
