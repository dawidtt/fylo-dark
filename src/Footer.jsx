import GetAccess from "./GetAccess";
import IconWithText from "./IconWithText";
import Links from "./Links";
function Footer() {
  return (
    <footer className="bg-[#0b1523]  translate-y-10 p-6 bg-[linear-gradient(#181f2a,#181f2a)] bg-[size:100%_200px] bg-no-repeat md:pb-18">
      <GetAccess></GetAccess>
      <svg
        className="w-[200px] my-12 md:mx-28"
        width="200"
        viewBox="0 0 176 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z" />
        </g>
      </svg>
      <div className="md:flex md:items-start justify-between md:gap-6 md:mx-28">
        <div className="mt-12 md:mt-0 md:max-w-[500px]">
          <IconWithText
            icon="./src/assets/icon-location.svg"
            text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua"
          />
        </div>
        <div>
          <IconWithText
            icon="./src/assets/icon-phone.svg"
            text="+1-543-123-4567"
          />
          <IconWithText
            icon="./src/assets/icon-email.svg"
            text="example@fylo.com"
          />
        </div>

        <Links links={["About us", "Jobs", "Press", "Blog"]}></Links>
        <Links links={["Contact us", "Terms", "Privacy"]}></Links>
        <div className="flex justify-center gap-8">
          <svg
            className="w-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
            <path
              fill="white"
              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
            />
          </svg>
          <svg
            className="w-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path
              fill="white"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
          <svg
            className="w-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path
              fill="white"
              d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
