import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Logo from "../Logo";
import DataContext from "../../context/DataContext";
import { showCalendar } from "../../context/DataActions";
import { getTodaysPhoto } from "../../api";

const Hero = () => {
  const context = useContext(DataContext);

  const searchTodaysPhoto = () => {
    if (context?.showCalendar) {
      console.log("pasa por aca ", context.showCalendar);
      getTodaysPhoto().then((data) => context?.setData(data));
    }
    context?.setShowPhoto(true);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Logo />
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Logo />
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-orange sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Space wander 🚀</span>
              </h1>
              <p className="font-mono mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:my-10 md:text-xl lg:mx-0">
                Select any date and be surprised by{" "}
                <span className="font-semibold">
                  NASA's Astronomic Photo of the day
                </span>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div
                  onClick={() => searchTodaysPhoto()}
                  className="rounded-md shadow"
                >
                  <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green hover:bg-green-600 md:py-4 md:text-lg md:px-10 cursor-pointer">
                    Today's photo
                  </p>
                </div>
                <div
                  onClick={() => showCalendar(context)}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-200 hover:bg-green-600 hover:text-white md:py-4 md:text-lg md:px-10 cursor-pointer">
                    Search by date
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/hero.jpeg"
          layout="fill"
          objectPosition="right top"
          alt="space"
        />
      </div>
    </div>
  );
};

export default Hero;