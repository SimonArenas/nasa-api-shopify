import Head from "next/head";
import { useContext } from "react";

import CalendarModal from "../components/Calendar";
import Hero from "../components/Hero";
import ImageOfTheDay from "../components/ImageOfTheDay";
import Loading from "../components/Loading";
import DataContext from "../context/DataContext";

const Home = () => {
  const context = useContext(DataContext);

  return (
    <>
      <Head>
        <title>Space wander 🚀 </title>
      </Head>
      <Hero />
      {context?.showCalendar && <CalendarModal />}
      {context?.showPhoto && <ImageOfTheDay data={context?.data} />}
      {context?.isLoading && <Loading />}
    </>
  );
};

export default Home;
