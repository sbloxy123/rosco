"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { groq } from "next-sanity";
import client from "../../../sanity/sanity.client";

const backgroundVariants = {
  open: {
    opacity: 1,
    y: 0,
    height: "100vh",
    transition: {
      type: "", // Use a spring animation for more natural movement
      stiffness: 260,
      damping: 20,
      // when: "beforeChildren", // Animate the container before its children
      staggerChildren: 0.1, // Stagger the animation of children
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0.4,
    y: "-100%",
    height: 0,
    transition: { duration: 0.5, ease: "easeInOut" }, // Smooth transition with easeInOut
    // transitionEnd: { display: "none" },
  }, // Ensure component is not interactive when closed
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.5, ease: "easeInOut" }, // Match the exit transition to the closed state
  },
};
const navVariants = {
  open: {
    opacity: 1,

    transition: { staggerChildren: 0.1, delayChildren: 0 }, // delayChildren starts the staggering after the menu opens
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }, // staggerDirection -1 makes the children animate in reverse order
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

const query: string = groq`
    *[
  _type == "service" && (
    serviceTitle match $searchText || serviceSummary match $searchText ||  serviceAsideList.summaryList[] match $searchText  )]{
      "id": _id,
      "slug": slug.current,
      serviceTitle,
      serviceSummary
  }
`;
interface SearchResultListProps {
  setSearchIsOpen: (isOpen: boolean) => void;
  results: any[];
}
const SearchResultList: React.FC<SearchResultListProps> = ({
  setSearchIsOpen,
  results,
}) => {
  return (
    <>
      {results.map((result) => (
        <Link
          key={result._id}
          onClick={() => setSearchIsOpen(false)}
          href={`/services/${result.slug}`}
        >
          <p className="capitalize">
            <span>services / </span>
            <strong>{result.serviceTitle}</strong>
          </p>
        </Link>
      ))}
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  // search states
  const ref = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  // useOutsideClick({
  //   ref: ref,
  //   handler: () => {
  //     setIsModalOpen(false);
  //     setProducts([]);
  //   },
  // });
  const fetchResults = async () => {
    setIsLoading(true);
    const results = await client.fetch(query, {
      searchText: `*${searchText}*`,
    });

    setResults(results);
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchResults();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div className="z-50 small:fixed top-0 left-0 w-full bg-white">
      <header className="relative tracking-[0.06em]">
        <div className="relative z-50 max-w-screen-large mx-auto py-[2.7rem] bg-[#fff]">
          <div className="flex items-center justify-between h-20 px-[5%] xsmall:px-10 small:px-layout-small">
            <div className="max-w-[172px] w-[clamp(120px, 8vw, 172px)] xsmall:w-full">
              <Link href="/">
                {/* header-logo */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 211 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_316_43181)">
                    <path
                      d="M107.182 15.8996C106.786 15.5399 106.241 15.2014 105.535 14.8629C104.819 14.6196 103.835 14.7995 102.542 15.4342C101.397 15.9948 100.136 16.7459 98.7778 17.6874C98.4035 16.8094 98.0507 15.8785 97.7192 14.9052C100.446 11.0758 102.777 8.06094 104.637 5.92408C104.958 5.55383 105.108 5.0778 105.097 4.52772C105.086 3.95648 104.84 3.48044 104.359 3.1102C103.878 2.72937 103.151 2.63416 102.114 2.82458C100.788 3.13135 99.6332 3.46987 98.6815 3.84011C98.1362 4.03053 97.5374 4.22094 96.8852 4.43251C95.8801 4.76044 95.0995 5.35284 94.5756 6.2097C94.041 7.07714 93.8806 8.06094 94.1051 9.13995C94.18 9.48904 94.2655 9.86987 94.3403 10.2718C94.5863 11.3826 94.8643 12.578 95.153 13.858C93.4742 16.0795 91.9559 18.2586 90.6728 20.3638C89.3148 22.5641 88.6626 24.2143 88.6626 25.4203C88.6626 25.9386 88.8016 26.3195 89.0582 26.5628C89.2935 26.7743 89.6356 26.8695 90.0526 26.8272C90.8225 26.7532 91.5817 26.4676 92.3088 25.9915C92.9396 25.5578 93.7523 24.8596 94.7253 23.9181C95.4951 23.1671 96.3826 22.3631 97.3663 21.5168C98.3928 24.4576 99.7294 26.8801 101.365 28.7314C101.814 29.1968 102.413 29.4401 103.151 29.4401C103.194 29.4401 103.237 29.4401 103.279 29.4401C104.017 29.4084 104.723 29.292 105.396 29.0804C105.739 28.9535 105.942 28.6996 105.995 28.3611C106.049 28.0226 105.931 27.7158 105.632 27.4725C103.675 26.1396 101.686 23.5267 99.7187 19.6973C101.782 18.1952 104.199 17.2431 106.915 16.8517C107.139 16.8094 107.289 16.6824 107.353 16.4709C107.417 16.2593 107.353 16.0583 107.182 15.889V15.8996ZM101.782 5.72309C100.67 6.98193 98.9916 9.01301 96.7889 11.774C96.5323 10.7796 96.3078 9.7535 96.1046 8.70623C96.0512 8.33598 96.1046 8.00805 96.2864 7.72243C96.4682 7.43681 96.7248 7.23582 97.0563 7.11945C97.5802 6.93962 98.0827 6.7492 98.5639 6.55879C99.4728 6.16739 100.553 5.82887 101.75 5.53268C101.761 5.54325 101.782 5.57499 101.793 5.63846C101.793 5.6702 101.793 5.69135 101.772 5.72309H101.782ZM96.6179 19.2742C94.8108 20.6705 93.2818 21.9188 92.0628 23.0084C93.0893 21.5168 94.4152 19.6021 96.0405 17.2854C96.2222 17.9413 96.4147 18.6077 96.6179 19.2742Z"
                      fill="black"
                    />
                    <path
                      d="M14.8626 31.6509H9.80507L7.22817 19.0942H4.97204V31.6509H0V0.35968H7.49548C9.63399 0.35968 11.3769 0.983812 12.7348 2.23208C14.2425 3.60728 14.991 5.54315 14.991 8.03968V11.3931C14.991 13.9213 14.2425 15.8784 12.7348 17.2536C12.521 17.4651 12.2857 17.6555 12.0077 17.8354L14.852 31.6509H14.8626ZM10.0296 8.05026C10.0296 7.00299 9.80507 6.26249 9.35598 5.81819C8.96036 5.45852 8.35088 5.27869 7.50617 5.27869H4.97204V14.1752H7.50617C8.35088 14.1752 8.97105 13.9954 9.35598 13.6357C9.80507 13.2232 10.0296 12.4721 10.0296 11.4036V8.05026Z"
                      fill="black"
                    />
                    <path
                      d="M25.0311 32C22.8605 32 21.1177 31.3864 19.7918 30.1699C18.2841 28.7418 17.5356 26.7848 17.5356 24.3094V7.69058C17.5356 5.21521 18.2841 3.26876 19.7918 1.83008C21.1177 0.602975 22.8605 0 25.0311 0C27.2017 0 28.9446 0.613554 30.2705 1.83008C31.7781 3.25818 32.5266 5.21521 32.5266 7.69058V24.32C32.5266 26.7954 31.7781 28.7418 30.2705 30.1805C28.9446 31.4076 27.2017 32.0106 25.0311 32.0106V32ZM25.0311 4.90843C24.1864 4.90843 23.5662 5.08826 23.1813 5.44793C22.7322 5.8605 22.5077 6.61157 22.5077 7.68V24.3094C22.5077 25.3778 22.7322 26.1289 23.1813 26.5415C23.5769 26.9012 24.1864 27.081 25.0311 27.081C25.8758 27.081 26.5174 26.9012 26.8809 26.5415C27.33 26.1501 27.5546 25.4096 27.5546 24.3094V7.69058C27.5546 6.59041 27.33 5.83934 26.8809 5.45851C26.5174 5.09884 25.8972 4.91901 25.0311 4.91901V4.90843Z"
                      fill="black"
                    />
                    <path
                      d="M42.5135 32.0001C40.343 32.0001 38.6001 31.3865 37.2742 30.17C35.7665 28.7419 35.0181 26.7849 35.0181 24.3095V20.2368H39.9901V24.3095C39.9901 25.3779 40.2146 26.129 40.6637 26.5416C41.0594 26.9012 41.6688 27.0811 42.5135 27.0811C43.3583 27.0811 43.9998 26.9012 44.3634 26.5416C44.8124 26.1502 45.037 25.4097 45.037 24.3095V22.3419C45.037 20.9667 44.481 19.7819 43.369 18.7664C43.123 18.5548 42.4922 18.174 41.4764 17.6027C40.065 16.8622 39.0171 16.2064 38.3541 15.6351C37.2742 14.6831 36.4402 13.5935 35.8735 12.3769C35.2961 11.1604 35.0181 9.84868 35.0181 8.44173V7.68008C35.0181 5.20471 35.7665 3.25826 37.2742 1.81958C38.6001 0.592477 40.343 -0.010498 42.5135 -0.010498C44.6841 -0.010498 46.427 0.603056 47.7529 1.81958C49.2605 3.24768 50.009 5.20471 50.009 7.68008V10.4093H45.037V7.68008C45.037 6.57992 44.8124 5.82884 44.3634 5.44801C43.9998 5.08835 43.3796 4.90851 42.5135 4.90851C41.6474 4.90851 41.0487 5.08835 40.6637 5.44801C40.2146 5.86058 39.9901 6.61165 39.9901 7.68008V8.44173C39.9901 9.81694 40.5461 10.9912 41.6581 11.975C41.9575 12.2183 42.5456 12.5674 43.4224 13.0434C44.9835 13.8791 46.0742 14.5667 46.673 15.0956C48.897 17.0632 50.0197 19.4751 50.0197 22.3419V24.3095C50.0197 26.7849 49.2712 28.7313 47.7636 30.17C46.4377 31.3971 44.6948 32.0001 42.5242 32.0001H42.5135Z"
                      fill="black"
                    />
                    <path
                      d="M60.0922 32C57.9857 32 56.2321 31.3864 54.8528 30.1699C53.3452 28.6783 52.5967 26.7319 52.5967 24.3094V7.69058C52.5967 5.27868 53.3452 3.32165 54.8528 1.83008C56.2428 0.602975 57.9857 0 60.0922 0C62.1986 0 64.0056 0.613554 65.3315 1.83008C66.8392 3.25818 67.5876 5.21521 67.5876 7.69058V10.4621H62.6156V7.69058C62.6156 6.59041 62.4018 5.83934 61.9847 5.45851C61.5891 5.09884 60.9583 4.91901 60.0922 4.91901C59.2261 4.91901 58.6273 5.09884 58.2424 5.45851C57.7933 5.87107 57.5687 6.62215 57.5687 7.69058V24.32C57.5687 25.3884 57.7933 26.1395 58.2424 26.5521C58.638 26.9117 59.2475 27.0916 60.0922 27.0916C60.9369 27.0916 61.5998 26.9117 61.9847 26.5521C62.4018 26.1607 62.6156 25.4202 62.6156 24.32V20.3002H67.5876V24.32C67.5876 26.7954 66.8392 28.7418 65.3315 30.1805C64.0056 31.4076 62.2628 32.0106 60.0922 32.0106V32Z"
                      fill="black"
                    />
                    <path
                      d="M77.7992 32C75.6286 32 73.8857 31.3864 72.5598 30.1699C71.0522 28.7418 70.3037 26.7848 70.3037 24.3094V7.69058C70.3037 5.21521 71.0522 3.26876 72.5598 1.83008C73.8857 0.602975 75.6286 0 77.7992 0C79.9698 0 81.7127 0.613554 83.0385 1.83008C84.5462 3.25818 85.2947 5.21521 85.2947 7.69058V24.32C85.2947 26.7954 84.5462 28.7418 83.0385 30.1805C81.7127 31.4076 79.9698 32.0106 77.7992 32.0106V32ZM77.7992 4.90843C76.9545 4.90843 76.3343 5.08826 75.9494 5.44793C75.5003 5.8605 75.2758 6.61157 75.2758 7.68V24.3094C75.2758 25.3778 75.5003 26.1289 75.9494 26.5415C76.345 26.9012 76.9545 27.081 77.7992 27.081C78.6439 27.081 79.2855 26.9012 79.649 26.5415C80.0981 26.1501 80.3226 25.4096 80.3226 24.3094V7.69058C80.3226 6.59041 80.0981 5.83934 79.649 5.45851C79.2855 5.09884 78.6653 4.91901 77.7992 4.91901V4.90843Z"
                      fill="black"
                    />
                    <path
                      d="M115.854 31.6299H110.882V0.338684H118.377C120.516 0.338684 122.259 0.962816 123.617 2.21108C125.124 3.58629 125.873 5.52215 125.873 8.01868V11.4144C125.873 13.9427 125.124 15.8997 123.617 17.2749C122.291 18.502 120.548 19.105 118.377 19.105H115.843V31.6193L115.854 31.6299ZM115.854 14.1965H118.388C119.233 14.1965 119.853 14.0167 120.238 13.657C120.687 13.2445 120.911 12.4934 120.911 11.425V8.02926C120.911 6.98199 120.687 6.24149 120.238 5.7972C119.842 5.43753 119.233 5.25769 118.388 5.25769H115.854V14.1965Z"
                      fill="black"
                    />
                    <path
                      d="M133.561 5.25775V13.1282H139.164V18.0472H133.561V26.7216H141.698V31.6406H128.6V0.338745H141.698V5.25775H133.561Z"
                      fill="black"
                    />
                    <path
                      d="M159.629 31.63H154.572L151.995 19.0733H149.739V31.63H144.767V0.338745H152.262C154.401 0.338745 156.143 0.962877 157.501 2.21114C159.009 3.58635 159.758 5.52222 159.758 8.01874V11.3721C159.758 13.9004 159.009 15.8574 157.501 17.2326C157.288 17.4442 157.052 17.6346 156.774 17.8144L159.619 31.63H159.629ZM154.796 8.02932C154.796 6.98205 154.572 6.24155 154.123 5.79726C153.727 5.43759 153.117 5.25775 152.273 5.25775H149.739V14.1543H152.273C153.117 14.1543 153.738 13.9744 154.123 13.6148C154.572 13.2022 154.796 12.4511 154.796 11.3827V8.02932Z"
                      fill="black"
                    />
                    <path
                      d="M175.807 31.63H162.708V0.338745H167.681V26.711H175.818V31.63H175.807Z"
                      fill="black"
                    />
                    <path
                      d="M183.174 31.63H178.202V0.338745H183.174V31.63Z"
                      fill="black"
                    />
                    <path
                      d="M202.057 31.63H199.17L191.578 15.7622V31.63H186.606V0.338745H189.493L197.085 16.1642V0.338745H202.057V31.63Z"
                      fill="black"
                    />
                    <path
                      d="M210.462 31.63H205.49V0.338745H210.462V31.63Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_43181">
                      <rect width="210.462" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

            {/* desktop nav */}
            <div className="flex items-center">
              <div className="hidden small:block">
                <nav>
                  <ul className="nav__link__list flex items-center justify-between w-[45vw] max-w-[645px] uppercase font-[400] font-sans text-[rgba(47,48,71,90%)] text-[1.4rem] small:pl-[1.9rem]">
                    <li>
                      <Link href="/" className="">
                        <div className="nav__item__link pr-[0.4rem] text-right">
                          <span className="font-semibold px-[0.4rem]">01 </span>
                          Home
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="">
                        <div className="nav__item__link pr-[0.4rem] text-right">
                          <span className="font-semibold px-[0.4rem]">02 </span>
                          About
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="">
                        <div className="nav__item__link pr-[0.4rem] text-right">
                          <span className="font-semibold px-[0.4rem]">03 </span>
                          Services
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects" className="">
                        <div className="nav__item__link pr-[0.4rem] text-right">
                          <span className="font-semibold px-[0.4rem]">04 </span>
                          Projects
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs" className="">
                        <div className="nav__item__link pr-[0.4rem] text-right">
                          <span className="font-semibold px-[0.4rem]">05 </span>
                          FAQ's
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="">
                        <div className="nav__item__link pr-[0.4rem] text-right">
                          <span className="font-semibold px-[0.4rem]">06 </span>
                          Contact
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* nav extras */}
            <div className="flex gap-[1rem]">
              <form
                className="nav-search-form relative flex flex-col justify-center gap-8 xsmall:justify-end xsmall:mr-8 xsmall:gap-4 xsmall:flex-row small:w-fit small:mr-0"
                // onSubmit={handleSubmit}
              >
                <div className="flex items-center gap-[1rem]">
                  <div className="xsmall:absolute top-0 left-0 xsmall:left-[3%] h-full w-auto">
                    {/* magnifying glass button */}
                    <button
                      className={`relative h-full aspect-square flex justify-center items-center opacity-30 xsmall:-z-10 ${
                        searchIsOpen && "hidden"
                      }  `}
                      onClick={(event) => {
                        event.preventDefault();
                        setSearchIsOpen(!searchIsOpen);
                      }}
                    >
                      <span className="h-[3.2rem] w-[3.2rem] xsmall:h-[2rem] xsmall:w-[2rem]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.97495 15.25C7.73388 15.25 6.52067 14.882 5.48875 14.1925C4.45683 13.503 3.65255 12.523 3.17761 11.3764C2.70267 10.2297 2.5784 8.96805 2.82053 7.75082C3.06265 6.53359 3.66028 5.41549 4.53786 4.53792C5.41543 3.66035 6.53353 3.06271 7.75076 2.82059C8.96799 2.57847 10.2297 2.70273 11.3763 3.17767C12.5229 3.65261 13.5029 4.45689 14.1924 5.48881C14.8819 6.52073 15.25 7.73394 15.25 8.97502C15.25 9.79906 15.0876 10.615 14.7723 11.3764C14.4569 12.1377 13.9947 12.8294 13.4121 13.4121C12.8294 13.9948 12.1376 14.457 11.3763 14.7724C10.615 15.0877 9.799 15.25 8.97495 15.25ZM8.97495 3.95835C7.98605 3.95835 7.01935 4.25159 6.1971 4.801C5.37486 5.35041 4.73399 6.1313 4.35556 7.04493C3.97712 7.95856 3.8781 8.96389 4.07103 9.9338C4.26395 10.9037 4.74016 11.7946 5.43942 12.4939C6.13868 13.1931 7.0296 13.6693 7.9995 13.8623C8.96941 14.0552 9.97474 13.9562 10.8884 13.5777C11.802 13.1993 12.5829 12.5584 13.1323 11.7362C13.6817 10.914 13.975 9.94726 13.975 8.95835C13.975 7.63227 13.4482 6.3605 12.5105 5.42281C11.5728 4.48513 10.301 3.95835 8.97495 3.95835Z"
                            fill="#231F20"
                          />
                          <path
                            d="M16.6667 17.2917C16.5846 17.2921 16.5032 17.276 16.4273 17.2446C16.3515 17.2131 16.2827 17.1668 16.225 17.1083L12.7833 13.6667C12.6729 13.5482 12.6128 13.3915 12.6157 13.2296C12.6186 13.0677 12.6841 12.9132 12.7987 12.7987C12.9132 12.6841 13.0677 12.6186 13.2296 12.6157C13.3915 12.6128 13.5482 12.6729 13.6667 12.7833L17.1083 16.225C17.2254 16.3422 17.2911 16.5011 17.2911 16.6667C17.2911 16.8323 17.2254 16.9912 17.1083 17.1083C17.0506 17.1668 16.9818 17.2131 16.906 17.2446C16.8302 17.276 16.7488 17.2921 16.6667 17.2917Z"
                            fill="#231F20"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="xsmall:absolute top-0 right-0 h-full w-auto">
                    {/* dictaphone button */}
                    <button className="h-full aspect-square flex justify-center items-center opacity-30">
                      <span className="h-[3.2rem] w-[3.2rem] xsmall:h-[2rem] xsmall:w-[2rem]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.74134 13.457H10.258C11.4913 13.457 12.483 12.432 12.483 11.1654V4.9987C12.483 3.73203 11.483 2.70703 10.258 2.70703H9.74134C8.50801 2.70703 7.51634 3.73203 7.51634 4.9987V11.157C7.51634 12.4237 8.51634 13.4487 9.74134 13.4487V13.457ZM8.76634 4.9987C8.76634 4.4237 9.20801 3.95703 9.74134 3.95703H10.258C10.7997 3.95703 11.233 4.4237 11.233 4.9987V11.157C11.233 11.732 10.7913 12.1987 10.258 12.1987H9.74134C9.19967 12.1987 8.76634 11.732 8.76634 11.157V4.9987ZM14.7913 7.8237V11.3487C14.7913 13.6904 12.9413 15.5904 10.6247 15.707V17.2904C10.6247 17.632 10.3413 17.9154 9.99967 17.9154C9.65801 17.9154 9.37467 17.632 9.37467 17.2904V15.707C7.05801 15.5904 5.20801 13.6904 5.20801 11.3487V7.8237C5.20801 7.48203 5.49134 7.1987 5.83301 7.1987C6.17467 7.1987 6.45801 7.48203 6.45801 7.8237V11.3487C6.45801 13.0737 7.86634 14.482 9.59968 14.482H10.408C12.1413 14.482 13.5497 13.0737 13.5497 11.3487V7.8237C13.5497 7.48203 13.833 7.1987 14.1747 7.1987C14.5163 7.1987 14.7997 7.48203 14.7997 7.8237H14.7913Z"
                            fill="#2F3047"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                <input
                  type="search"
                  placeholder="Search"
                  // value={email}
                  // onChange={handleInput}
                  className="p-4 hidden xsmall:block xsmall:bg-[rgba(230,230,231,0.3)] text-left pl-[4.9rem] text-theme-dark rounded-sm w-full  text-[1.4rem] tracking-[0.06em] xsmall:w-[clamp(100px,40vw,323px)] before:absolute before:top-0 before:left-0 before:w-[3rem] before:content-none font-sans small:w-[clamp(150px,15vw,214px)] h-[4.8rem] max-h-[4.8rem] focus:bg-white border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out"
                />
              </form>

              {/* == MOBILE MENU OPEN/CLOSE BUTTONS  */}

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
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3333 17.917H16.6667C16.3351 17.917 16.0172 17.7853 15.7828 17.5509C15.5484 17.3165 15.4167 16.9985 15.4167 16.667C15.4167 16.3355 15.5484 16.0175 15.7828 15.7831C16.0172 15.5487 16.3351 15.417 16.6667 15.417H33.3333C33.6648 15.417 33.9828 15.5487 34.2172 15.7831C34.4516 16.0175 34.5833 16.3355 34.5833 16.667C34.5833 16.9985 34.4516 17.3165 34.2172 17.5509C33.9828 17.7853 33.6648 17.917 33.3333 17.917Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.45 11.25H6.78333C6.4518 11.25 6.13386 11.1183 5.89944 10.8839C5.66502 10.6495 5.53333 10.3315 5.53333 10C5.53333 9.66848 5.66502 9.35054 5.89944 9.11612C6.13386 8.8817 6.4518 8.75 6.78333 8.75H33.45C33.7815 8.75 34.0995 8.8817 34.3339 9.11612C34.5683 9.35054 34.7 9.66848 34.7 10C34.7 10.3315 34.5683 10.6495 34.3339 10.8839C34.0995 11.1183 33.7815 11.25 33.45 11.25Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.45 24.583H6.78333C6.4518 24.583 6.13386 24.4513 5.89944 24.2169C5.66502 23.9825 5.53333 23.6645 5.53333 23.333C5.53333 23.0015 5.66502 22.6835 5.89944 22.4491C6.13386 22.2147 6.4518 22.083 6.78333 22.083H33.45C33.7815 22.083 34.0995 22.2147 34.3339 22.4491C34.5683 22.6835 34.7 23.0015 34.7 23.333C34.7 23.6645 34.5683 23.9825 34.3339 24.2169C34.0995 24.4513 33.7815 24.583 33.45 24.583Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.3333 31.25H16.6667C16.3351 31.25 16.0172 31.1183 15.7828 30.8839C15.5484 30.6495 15.4167 30.3315 15.4167 30C15.4167 29.6685 15.5484 29.3505 15.7828 29.1161C16.0172 28.8817 16.3351 28.75 16.6667 28.75H33.3333C33.6648 28.75 33.9828 28.8817 34.2172 29.1161C34.4516 29.3505 34.5833 29.6685 34.5833 30C34.5833 30.3315 34.4516 30.6495 34.2172 30.8839C33.9828 31.1183 33.6648 31.25 33.3333 31.25Z"
                        fill="#2F3047"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7667 19.9999L29.1333 12.6333C29.2561 12.5188 29.3546 12.3808 29.423 12.2275C29.4913 12.0742 29.528 11.9086 29.531 11.7408C29.5339 11.573 29.5031 11.4062 29.4402 11.2506C29.3773 11.095 29.2838 10.9536 29.1651 10.8349C29.0464 10.7162 28.905 10.6226 28.7493 10.5597C28.5937 10.4969 28.427 10.466 28.2591 10.4689C28.0913 10.4719 27.9258 10.5086 27.7724 10.577C27.6191 10.6453 27.4811 10.7438 27.3667 10.8666L20 18.2333L12.6333 10.8666C12.3964 10.6458 12.083 10.5256 11.7591 10.5313C11.4353 10.537 11.1263 10.6682 10.8973 10.8972C10.6683 11.1262 10.5371 11.4352 10.5314 11.7591C10.5257 12.0829 10.6459 12.3963 10.8667 12.6333L18.2333 19.9999L10.8667 27.3666C10.6326 27.601 10.5011 27.9187 10.5011 28.2499C10.5011 28.5812 10.6326 28.8989 10.8667 29.1333C11.101 29.3673 11.4187 29.4988 11.75 29.4988C12.0812 29.4988 12.399 29.3673 12.6333 29.1333L20 21.7666L27.3667 29.1333C27.601 29.3673 27.9187 29.4988 28.25 29.4988C28.5813 29.4988 28.899 29.3673 29.1333 29.1333C29.3674 28.8989 29.4989 28.5812 29.4989 28.2499C29.4989 27.9187 29.3674 27.601 29.1333 27.3666L21.7667 19.9999Z"
                        fill="#2F3047"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile nav search results */}
        <AnimatePresence>
          {searchIsOpen && (
            <motion.div
              className="small:hidden h-screen absolute top-[7rem] left-0 w-full z-[45]"
              initial="closed"
              animate="open"
              exit="exit"
              variants={backgroundVariants}
            >
              <motion.div
                variants={navVariants}
                className="absolute left-0 w-full h-full py-20 flex flex-col justify-start gap-[3rem] bg-white items-center uppercase font-normal font-sans text-[2.4rem] text-[rgba(47,48,71,90%)] z-30"
              >
                {/* form in mobile view */}
                <form
                  className="xsmall:hidden nav-search-form relative flex justify-end flex-row w-full px-[5%]"
                  // onSubmit={handleSubmit}
                >
                  {/* search form icons */}
                  <div className="flex items-center gap-[1rem]">
                    <div className="absolute top-0 left-[7%] h-full w-auto">
                      {/* magnifying glass button */}
                      <button
                        className="h-full aspect-square flex justify-center items-center cursor-default"
                        onClick={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <span className="h-[3.2rem] w-[3.2rem] xsmall:h-[2rem] xsmall:w-[2rem]">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.97495 15.25C7.73388 15.25 6.52067 14.882 5.48875 14.1925C4.45683 13.503 3.65255 12.523 3.17761 11.3764C2.70267 10.2297 2.5784 8.96805 2.82053 7.75082C3.06265 6.53359 3.66028 5.41549 4.53786 4.53792C5.41543 3.66035 6.53353 3.06271 7.75076 2.82059C8.96799 2.57847 10.2297 2.70273 11.3763 3.17767C12.5229 3.65261 13.5029 4.45689 14.1924 5.48881C14.8819 6.52073 15.25 7.73394 15.25 8.97502C15.25 9.79906 15.0876 10.615 14.7723 11.3764C14.4569 12.1377 13.9947 12.8294 13.4121 13.4121C12.8294 13.9948 12.1376 14.457 11.3763 14.7724C10.615 15.0877 9.799 15.25 8.97495 15.25ZM8.97495 3.95835C7.98605 3.95835 7.01935 4.25159 6.1971 4.801C5.37486 5.35041 4.73399 6.1313 4.35556 7.04493C3.97712 7.95856 3.8781 8.96389 4.07103 9.9338C4.26395 10.9037 4.74016 11.7946 5.43942 12.4939C6.13868 13.1931 7.0296 13.6693 7.9995 13.8623C8.96941 14.0552 9.97474 13.9562 10.8884 13.5777C11.802 13.1993 12.5829 12.5584 13.1323 11.7362C13.6817 10.914 13.975 9.94726 13.975 8.95835C13.975 7.63227 13.4482 6.3605 12.5105 5.42281C11.5728 4.48513 10.301 3.95835 8.97495 3.95835Z"
                              fill="#231F20"
                            />
                            <path
                              d="M16.6667 17.2917C16.5846 17.2921 16.5032 17.276 16.4273 17.2446C16.3515 17.2131 16.2827 17.1668 16.225 17.1083L12.7833 13.6667C12.6729 13.5482 12.6128 13.3915 12.6157 13.2296C12.6186 13.0677 12.6841 12.9132 12.7987 12.7987C12.9132 12.6841 13.0677 12.6186 13.2296 12.6157C13.3915 12.6128 13.5482 12.6729 13.6667 12.7833L17.1083 16.225C17.2254 16.3422 17.2911 16.5011 17.2911 16.6667C17.2911 16.8323 17.2254 16.9912 17.1083 17.1083C17.0506 17.1668 16.9818 17.2131 16.906 17.2446C16.8302 17.276 16.7488 17.2921 16.6667 17.2917Z"
                              fill="#231F20"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div className="absolute top-0 bottom-0 right-[7%] h-full w-auto my-auto">
                      {/* close search button */}
                      <button
                        className="h-full aspect-square flex justify-center items-center"
                        onClick={(event) => {
                          event.preventDefault();
                          setSearchIsOpen(!searchIsOpen);
                        }}
                      >
                        <span className="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.7667 19.9999L29.1333 12.6333C29.2561 12.5188 29.3546 12.3808 29.423 12.2275C29.4913 12.0742 29.528 11.9086 29.531 11.7408C29.5339 11.573 29.5031 11.4062 29.4402 11.2506C29.3773 11.095 29.2838 10.9536 29.1651 10.8349C29.0464 10.7162 28.905 10.6226 28.7493 10.5597C28.5937 10.4969 28.427 10.466 28.2591 10.4689C28.0913 10.4719 27.9258 10.5086 27.7724 10.577C27.6191 10.6453 27.4811 10.7438 27.3667 10.8666L20 18.2333L12.6333 10.8666C12.3964 10.6458 12.083 10.5256 11.7591 10.5313C11.4353 10.537 11.1263 10.6682 10.8973 10.8972C10.6683 11.1262 10.5371 11.4352 10.5314 11.7591C10.5257 12.0829 10.6459 12.3963 10.8667 12.6333L18.2333 19.9999L10.8667 27.3666C10.6326 27.601 10.5011 27.9187 10.5011 28.2499C10.5011 28.5812 10.6326 28.8989 10.8667 29.1333C11.101 29.3673 11.4187 29.4988 11.75 29.4988C12.0812 29.4988 12.399 29.3673 12.6333 29.1333L20 21.7666L27.3667 29.1333C27.601 29.3673 27.9187 29.4988 28.25 29.4988C28.5813 29.4988 28.899 29.3673 29.1333 29.1333C29.3674 28.8989 29.4989 28.5812 29.4989 28.2499C29.4989 27.9187 29.3674 27.601 29.1333 27.3666L21.7667 19.9999Z"
                              fill="#2F3047"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>

                  <input
                    type="search"
                    placeholder="Search"
                    // value={email}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="p-4 bg-[rgba(230,230,231,0.3)] text-left pl-[20%] text-theme-dark rounded-sm w-full  text-[1.4rem] tracking-[0.06em] xsmall:w-[clamp(100px,40vw,323px)] before:absolute before:top-0 before:left-0 before:w-[3rem] before:content-none font-sans small:w-[clamp(150px,15vw,214px)] h-[4.8rem] max-h-[4.8rem] focus:bg-white border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out"
                  />
                </form>
                <SearchResultList
                  results={results}
                  setSearchIsOpen={setSearchIsOpen}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* mobile nav dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="small:hidden h-screen absolute top-[7rem] left-0 w-full z-40"
              initial="closed"
              animate="open"
              exit="exit"
              variants={backgroundVariants}
            >
              <motion.ul
                variants={navVariants} // Control the staggering here
                className="absolute left-0 w-full h-full px-2 py-20 sm:px-3 flex flex-col justify-start gap-[3rem] bg-white items-center uppercase font-normal font-sans text-[2.4rem] text-[rgba(47,48,71,90%)] z-30"
              >
                {[
                  "Home",
                  "About",
                  "Services",
                  "Projects",
                  "FAQs",
                  "Contact",
                ].map((text, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link
                      href={
                        text.includes("Home")
                          ? "/"
                          : `/${text.toLowerCase().replace(" ", "")}`
                      }
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span className="font-bold">0{`${index + 1}`}</span>
                        {text.includes("About") ? (
                          <span>{text} us</span>
                        ) : text.includes("FAQs") ? (
                          <span>FAQ's</span>
                        ) : (
                          <span>{text}</span>
                        )}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
