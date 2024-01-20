export const SwiperArrowNext = ({
  swiperDivName,
}: {
  swiperDivName: string;
}) => {
  return (
    <div
      className={` ${swiperDivName} h-[56px] w-[56px] bg-white flex justify-center items-center rounded-md`}
    >
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.00031 13.7498C8.90177 13.7503 8.80413 13.7311 8.71312 13.6933C8.62211 13.6555 8.53956 13.6 8.47031 13.5298C8.32986 13.3892 8.25097 13.1986 8.25097 12.9998C8.25097 12.8011 8.32986 12.6105 8.47031 12.4698L13.9403 6.99985L8.47032 1.52985C8.33784 1.38767 8.26571 1.19963 8.26914 1.00532C8.27257 0.811023 8.35128 0.625638 8.4887 0.488225C8.62611 0.350812 8.81149 0.2721 9.00579 0.268672C9.2001 0.265243 9.38814 0.337366 9.53032 0.469846L15.5303 6.46985C15.6708 6.61047 15.7497 6.8011 15.7497 6.99985C15.7497 7.1986 15.6708 7.38922 15.5303 7.52985L9.53031 13.5298C9.46107 13.6 9.37852 13.6555 9.28751 13.6933C9.1965 13.7311 9.09885 13.7503 9.00031 13.7498Z"
          fill="#6015EF"
        />
        <path
          d="M15 7.75L1 7.75C0.801087 7.75 0.610322 7.67098 0.46967 7.53033C0.329017 7.38968 0.25 7.19891 0.25 7C0.25 6.80109 0.329017 6.61032 0.46967 6.46967C0.610322 6.32902 0.801088 6.25 1 6.25L15 6.25C15.1989 6.25 15.3897 6.32902 15.5303 6.46967C15.671 6.61033 15.75 6.80109 15.75 7C15.75 7.19892 15.671 7.38968 15.5303 7.53033C15.3897 7.67098 15.1989 7.75 15 7.75Z"
          fill="#6015EF"
        />
      </svg>
    </div>
  );
};
export const SwiperArrowPrev = ({
  swiperDivName,
}: {
  swiperDivName: string;
}) => {
  return (
    <div
      className={` ${swiperDivName} h-[56px] w-[56px] bg-white flex justify-center items-center rounded-md`}
    >
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.99968 13.7498C7.09822 13.7503 7.19586 13.7311 7.28687 13.6933C7.37789 13.6555 7.46044 13.6 7.52968 13.5298C7.67013 13.3892 7.74902 13.1986 7.74902 12.9998C7.74902 12.8011 7.67013 12.6105 7.52968 12.4698L2.05968 6.99985L7.52968 1.52985C7.66216 1.38767 7.73429 1.19963 7.73086 1.00532C7.72743 0.811023 7.64872 0.625638 7.5113 0.488224C7.37389 0.350811 7.18851 0.2721 6.99421 0.268671C6.7999 0.265243 6.61186 0.337366 6.46968 0.469846L0.469682 6.46985C0.329231 6.61047 0.250342 6.80109 0.250342 6.99985C0.250342 7.1986 0.329231 7.38922 0.469681 7.52984L6.46968 13.5298C6.53893 13.6 6.62148 13.6555 6.71249 13.6933C6.8035 13.7311 6.90114 13.7503 6.99968 13.7498Z"
          fill="#6015EF"
        />
        <path
          d="M1 7.75L15 7.75C15.1989 7.75 15.3897 7.67098 15.5303 7.53033C15.671 7.38968 15.75 7.19891 15.75 7C15.75 6.80109 15.671 6.61032 15.5303 6.46967C15.3897 6.32902 15.1989 6.25 15 6.25L1 6.25C0.801087 6.25 0.610322 6.32902 0.469669 6.46967C0.329017 6.61032 0.25 6.80108 0.25 7C0.25 7.19891 0.329016 7.38967 0.469669 7.53033C0.610322 7.67098 0.801087 7.75 1 7.75Z"
          fill="#6015EF"
        />
      </svg>
    </div>
  );
};
