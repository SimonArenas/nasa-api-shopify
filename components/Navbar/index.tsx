import { Disclosure } from "@headlessui/react";
import { HeartIcon } from "@heroicons/react/solid";
import Link from "next/link";

import Logo from "../Logo";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50">
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a>
                    <Logo />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/favorites">
                  <a>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-700 shadow-sm hover:bg-orange focus:outline-none"
                    >
                      <HeartIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>See favorites</span>
                    </button>
                  </a>
                </Link>
              </div>
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center" />
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
