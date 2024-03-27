import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/Logo.svg";
import MailingListForm from "../../../../components/MailingListForm";

export default function Footer() {
  return (
    <footer className="pb-[14rem] pt-[10rem] px-[5%] xsmall:px-0 xsmall:pb-[17rem] xsmall:pt-[11.5rem] small:pb-[15rem] small:pt-[9rem]  small:max-w-[1121px] small:mx-auto">
      <div className="">
        <Link
          href="/"
          className="mx-auto w-fit block max-w-[172px] w-[clamp(120px, 8vw, 172px)] xsmall:w-full small:hidden"
          aria-label="home"
        >
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

        <div className="small:flex justify-between flex-row-reverse small:items-end small:gap-4">
          <div className="text-center pt-16 small:text-left">
            <h4 className="font-normal text-[1.8rem] tracking-[0.12em] uppercase text-theme-dark">
              Join our mailing list
            </h4>
            <div className="w-full mx-auto flex gap-4 justify-center flex-col text-center pt-10 xsmall:flex-row xsmall:w-fit">
              <MailingListForm
                theme="dark"
                placeholder="Email address"
                buttonText="sign up"
              />
              <ul className="hidden xsmall:flex justify-center gap-4 small:hidden">
                <li>
                  <a
                    href="https://www.facebook.com/roscoandperlini.builders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to our Facebook page"
                  >
                    <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                      <svg
                        width="11"
                        height="24"
                        viewBox="0 0 11 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.49433 24H7.29176V11.8954H10.6425L11 7.84374H7.29176V5.53331C7.29176 4.579 7.48299 4.2023 8.39758 4.2023H10.9917V0H7.66591C4.10733 0 2.49433 1.58214 2.49433 4.61249V7.84374H0V11.9456H2.49433V23.9916V24Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/roscoandperlini"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to our Instagram page"
                  >
                    <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_80_6196)">
                          <path
                            d="M13 2.34C16.47 2.34 16.88 2.35 18.25 2.42C19.52 2.48 20.21 2.69 20.66 2.87C21.27 3.11 21.7 3.39 22.15 3.84C22.61 4.3 22.89 4.73 23.12 5.33C23.3 5.79 23.51 6.48 23.57 7.74C23.63 9.11 23.65 9.52 23.65 12.99C23.65 16.46 23.64 16.87 23.57 18.24C23.51 19.51 23.3 20.2 23.12 20.65C22.88 21.26 22.6 21.69 22.15 22.15C21.7 22.61 21.26 22.89 20.66 23.12C20.2 23.3 19.51 23.51 18.25 23.57C16.88 23.63 16.47 23.65 13 23.65C9.53 23.65 9.12 23.64 7.75 23.57C6.48 23.51 5.79 23.3 5.34 23.12C4.73 22.88 4.3 22.6 3.84 22.15C3.39 21.69 3.1 21.26 2.87 20.65C2.69 20.19 2.48 19.5 2.42 18.24C2.36 16.87 2.34 16.46 2.34 12.99C2.34 9.52 2.35 9.11 2.42 7.74C2.48 6.47 2.69 5.78 2.87 5.33C3.11 4.72 3.39 4.29 3.84 3.84C4.3 3.38 4.73 3.1 5.34 2.87C5.8 2.69 6.49 2.48 7.75 2.42C9.12 2.36 9.53 2.34 13 2.34ZM13 0C9.47 0 9.03 0.02 7.64 0.08C6.26 0.14 5.31 0.36 4.48 0.68C3.62 1.01 2.9 1.46 2.18 2.18C1.46 2.9 1.01 3.63 0.68 4.48C0.36 5.31 0.14 6.25 0.08 7.64C0.02 9.03 0 9.47 0 13C0 16.53 0.01 16.97 0.08 18.36C0.14 19.74 0.36 20.69 0.68 21.52C1.01 22.37 1.46 23.1 2.18 23.82C2.9 24.54 3.63 24.99 4.48 25.32C5.31 25.64 6.25 25.86 7.64 25.92C9.03 25.98 9.47 26 13 26C16.53 26 16.97 25.99 18.36 25.92C19.74 25.86 20.69 25.64 21.52 25.32C22.38 24.99 23.1 24.54 23.82 23.82C24.54 23.1 24.99 22.37 25.32 21.52C25.64 20.69 25.86 19.75 25.92 18.36C25.98 16.97 26 16.53 26 13C26 9.47 25.99 9.03 25.92 7.64C25.86 6.26 25.64 5.31 25.32 4.48C24.99 3.63 24.54 2.9 23.82 2.18C23.1 1.46 22.37 1.01 21.52 0.68C20.69 0.36 19.75 0.14 18.36 0.08C16.97 0.02 16.53 0 13 0Z"
                            fill="white"
                          />
                          <path
                            d="M13.0003 6.33008C9.31031 6.33008 6.32031 9.32008 6.32031 13.0101C6.32031 16.7001 9.31031 19.6901 13.0003 19.6901C16.6903 19.6901 19.6803 16.7001 19.6803 13.0101C19.6803 9.32008 16.6903 6.33008 13.0003 6.33008ZM13.0003 17.3401C10.6103 17.3401 8.67031 15.4001 8.67031 13.0101C8.67031 10.6201 10.6103 8.68008 13.0003 8.68008C15.3903 8.68008 17.3303 10.6201 17.3303 13.0101C17.3303 15.4001 15.3903 17.3401 13.0003 17.3401Z"
                            fill="white"
                          />
                          <path
                            d="M21.4999 6.06C21.4999 6.92 20.7999 7.62 19.9399 7.62C19.0799 7.62 18.3799 6.92 18.3799 6.06C18.3799 5.2 19.0799 4.5 19.9399 4.5C20.7999 4.5 21.4999 5.2 21.4999 6.06Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_80_6196">
                            <rect width="26" height="26" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="small:flex flex-col justify-between h-full gap-[2rem]">
            <Link
              href="/"
              className="hidden small:block mr-auto w-fit max-w-[172px] w-[clamp(120px, 8vw, 172px)]"
              aria-label="Home"
            >
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

            <ul className="flex flex-wrap justify-center items-center tracking-[0.02em] gap-x-[1.6rem] font-sans text-[1.4rem] mx-auto mt-10 text-theme-dark font-light small:h-[4.2rem] small:items-center small:justify-start small:mx-0 ">
              <li className="py-3 small:p-0">
                <Link href="/" className=" hover:text-purple-400 duration-300">
                  Home
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/about"
                  className="hover:text-purple-400 duration-300"
                >
                  About
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/services"
                  className="hover:text-purple-400 duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/projects"
                  className="hover:text-purple-400 duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/faqs"
                  className="hover:text-purple-400 duration-300"
                >
                  FAQ's
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/contact"
                  className="hover:text-purple-400 duration-300"
                >
                  Contact
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link href="/" className="hover:text-purple-400 duration-300">
                  Terms of Service
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/contact"
                  className="hover:text-purple-400 duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/contact"
                  className="hover:text-purple-400 duration-300"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="small:flex justify-between w-full">
          {/* socials large screen */}
          <ul className="flex justify-center gap-4 mt-10 xsmall:hidden small:flex small:items-end">
            <li>
              <a
                href="https://www.facebook.com/roscoandperlini.builders/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to our Facebook page"
              >
                <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                  <svg
                    width="11"
                    height="24"
                    viewBox="0 0 11 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.49433 24H7.29176V11.8954H10.6425L11 7.84374H7.29176V5.53331C7.29176 4.579 7.48299 4.2023 8.39758 4.2023H10.9917V0H7.66591C4.10733 0 2.49433 1.58214 2.49433 4.61249V7.84374H0V11.9456H2.49433V23.9916V24Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/roscoandperlini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to our Instagram page"
              >
                <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_80_6196)">
                      <path
                        d="M13 2.34C16.47 2.34 16.88 2.35 18.25 2.42C19.52 2.48 20.21 2.69 20.66 2.87C21.27 3.11 21.7 3.39 22.15 3.84C22.61 4.3 22.89 4.73 23.12 5.33C23.3 5.79 23.51 6.48 23.57 7.74C23.63 9.11 23.65 9.52 23.65 12.99C23.65 16.46 23.64 16.87 23.57 18.24C23.51 19.51 23.3 20.2 23.12 20.65C22.88 21.26 22.6 21.69 22.15 22.15C21.7 22.61 21.26 22.89 20.66 23.12C20.2 23.3 19.51 23.51 18.25 23.57C16.88 23.63 16.47 23.65 13 23.65C9.53 23.65 9.12 23.64 7.75 23.57C6.48 23.51 5.79 23.3 5.34 23.12C4.73 22.88 4.3 22.6 3.84 22.15C3.39 21.69 3.1 21.26 2.87 20.65C2.69 20.19 2.48 19.5 2.42 18.24C2.36 16.87 2.34 16.46 2.34 12.99C2.34 9.52 2.35 9.11 2.42 7.74C2.48 6.47 2.69 5.78 2.87 5.33C3.11 4.72 3.39 4.29 3.84 3.84C4.3 3.38 4.73 3.1 5.34 2.87C5.8 2.69 6.49 2.48 7.75 2.42C9.12 2.36 9.53 2.34 13 2.34ZM13 0C9.47 0 9.03 0.02 7.64 0.08C6.26 0.14 5.31 0.36 4.48 0.68C3.62 1.01 2.9 1.46 2.18 2.18C1.46 2.9 1.01 3.63 0.68 4.48C0.36 5.31 0.14 6.25 0.08 7.64C0.02 9.03 0 9.47 0 13C0 16.53 0.01 16.97 0.08 18.36C0.14 19.74 0.36 20.69 0.68 21.52C1.01 22.37 1.46 23.1 2.18 23.82C2.9 24.54 3.63 24.99 4.48 25.32C5.31 25.64 6.25 25.86 7.64 25.92C9.03 25.98 9.47 26 13 26C16.53 26 16.97 25.99 18.36 25.92C19.74 25.86 20.69 25.64 21.52 25.32C22.38 24.99 23.1 24.54 23.82 23.82C24.54 23.1 24.99 22.37 25.32 21.52C25.64 20.69 25.86 19.75 25.92 18.36C25.98 16.97 26 16.53 26 13C26 9.47 25.99 9.03 25.92 7.64C25.86 6.26 25.64 5.31 25.32 4.48C24.99 3.63 24.54 2.9 23.82 2.18C23.1 1.46 22.37 1.01 21.52 0.68C20.69 0.36 19.75 0.14 18.36 0.08C16.97 0.02 16.53 0 13 0Z"
                        fill="white"
                      />
                      <path
                        d="M13.0003 6.33008C9.31031 6.33008 6.32031 9.32008 6.32031 13.0101C6.32031 16.7001 9.31031 19.6901 13.0003 19.6901C16.6903 19.6901 19.6803 16.7001 19.6803 13.0101C19.6803 9.32008 16.6903 6.33008 13.0003 6.33008ZM13.0003 17.3401C10.6103 17.3401 8.67031 15.4001 8.67031 13.0101C8.67031 10.6201 10.6103 8.68008 13.0003 8.68008C15.3903 8.68008 17.3303 10.6201 17.3303 13.0101C17.3303 15.4001 15.3903 17.3401 13.0003 17.3401Z"
                        fill="white"
                      />
                      <path
                        d="M21.4999 6.06C21.4999 6.92 20.7999 7.62 19.9399 7.62C19.0799 7.62 18.3799 6.92 18.3799 6.06C18.3799 5.2 19.0799 4.5 19.9399 4.5C20.7999 4.5 21.4999 5.2 21.4999 6.06Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_6196">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </li>
          </ul>

          <h4 className="text-center font-light tracking-[0.02em] text-[1.4rem] mt-16 text-theme-dark small:text-right small:mt-[6rem]">
            {" "}
            &copy; {new Date().getFullYear()} Rosco & Perlini Ltd
          </h4>
        </div>
      </div>
    </footer>
  );
}
