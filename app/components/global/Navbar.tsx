"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-30">
      <header className="bg-theme_white-900 tracking-[0.06em]">
        <div className="max-w-screen-large mx-auto px-[5%] large:px-0 py-8">
          <div className="flex items-center justify-between h-20 xsmall:px-10">
            <div className="w-[172px] xsmall:w-full">
              <Link href="/">
                <Image src={Logo} width={210} height={106} alt="logo" />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden small:block">
                <nav>
                  <ul className="flex items-center gap-x-8 uppercase font-normal font-sans text-[1.45rem]">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-purple-400 duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-purple-400 duration-300"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="hover:text-purple-400 duration-300"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        className="hover:text-purple-400 duration-300"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faqs"
                        className="hover:text-purple-400 duration-300"
                      >
                        FAQ's
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-purple-400 duration-300"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* == MOBILE MENU OPEN/CLOSE  */}
            <div className="-mr-2 flex small:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-theme_black-900 hover:bg-theme_dark_orange-900"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                  >
                    <path
                      d="M28.3337 9.91699H11.667C11.3355 9.91699 11.0175 9.78529 10.7831 9.55087C10.5487 9.31645 10.417 8.99851 10.417 8.66699C10.417 8.33547 10.5487 8.01753 10.7831 7.78311C11.0175 7.54869 11.3355 7.41699 11.667 7.41699H28.3337C28.6652 7.41699 28.9831 7.54869 29.2175 7.78311C29.452 8.01753 29.5837 8.33547 29.5837 8.66699C29.5837 8.99851 29.452 9.31645 29.2175 9.55087C28.9831 9.78529 28.6652 9.91699 28.3337 9.91699Z"
                      fill="#2F3047"
                    />
                    <path
                      d="M28.4499 3.25H1.7832C1.45168 3.25 1.13374 3.1183 0.89932 2.88388C0.664899 2.64946 0.533203 2.33152 0.533203 2C0.533203 1.66848 0.664899 1.35054 0.89932 1.11612C1.13374 0.881696 1.45168 0.75 1.7832 0.75H28.4499C28.7814 0.75 29.0993 0.881696 29.3338 1.11612C29.5682 1.35054 29.6999 1.66848 29.6999 2C29.6999 2.33152 29.5682 2.64946 29.3338 2.88388C29.0993 3.1183 28.7814 3.25 28.4499 3.25Z"
                      fill="#2F3047"
                    />
                    <path
                      d="M28.4499 16.583H1.7832C1.45168 16.583 1.13374 16.4513 0.89932 16.2169C0.664899 15.9825 0.533203 15.6645 0.533203 15.333C0.533203 15.0015 0.664899 14.6835 0.89932 14.4491C1.13374 14.2147 1.45168 14.083 1.7832 14.083H28.4499C28.7814 14.083 29.0993 14.2147 29.3338 14.4491C29.5682 14.6835 29.6999 15.0015 29.6999 15.333C29.6999 15.6645 29.5682 15.9825 29.3338 16.2169C29.0993 16.4513 28.7814 16.583 28.4499 16.583Z"
                      fill="#2F3047"
                    />
                    <path
                      d="M28.3337 23.25H11.667C11.3355 23.25 11.0175 23.1183 10.7831 22.8839C10.5487 22.6495 10.417 22.3315 10.417 22C10.417 21.6685 10.5487 21.3505 10.7831 21.1161C11.0175 20.8817 11.3355 20.75 11.667 20.75H28.3337C28.6652 20.75 28.9831 20.8817 29.2175 21.1161C29.452 21.3505 29.5837 21.6685 29.5837 22C29.5837 22.3315 29.452 22.6495 29.2175 22.8839C28.9831 23.1183 28.6652 23.25 28.3337 23.25Z"
                      fill="#2F3047"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* == MOBILE NAV == */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <nav className="small:hidden z-20" id="mobile-menu">
              <div ref={ref}>
                <ul className="px-2 py-20 space-y-1 sm:px-3 z-30 h-screen flex flex-col justify-start gap-8 items-center uppercase font-normal font-sans text-[14.5px]">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-purple-400 duration-300"
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span>01</span>
                        <span>Home</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-purple-400 duration-300"
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span>02</span>
                        <span>About</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-purple-400 duration-300"
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span>03</span>
                        <span>Services</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="hover:text-purple-400 duration-300"
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span>04</span>
                        <span>Projects</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/FAQs"
                      className="hover:text-purple-400 duration-300"
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span>05</span>
                        <span>FAQ's</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-purple-400 duration-300"
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span>06</span>
                        <span>Contact</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </Transition>
      </header>
    </div>
  );
}

export default Navbar;
