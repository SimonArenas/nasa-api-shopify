import type { GetServerSideProps, NextPage } from "next";
import { useContext } from "react";
import CalendarModal from "../components/Calendar";
import Hero from "../components/Hero";
import ImageOfTheDay from "../components/ImageOfTheDay";
import DataContext from "../context/DataContext";

const Home = () => {
  const context = useContext(DataContext);

  return (
    <>
      <Hero />
      {context?.showCalendar && <CalendarModal />}
      {context?.showPhoto && <ImageOfTheDay data={context?.data} />}
    </>
  );
};

export default Home;
