function StayProductive() {
  return (
    <div className="text-white my-36 p-2 md:flex md:items-center md:w-[80vw] md:mx-auto">
      <img
        className="mx-auto w-[80%] md:w-[50%]"
        src="./src/assets/illustration-stay-productive.png"
        alt=""
      />
      <div className="mt-6 p-6">
        <h3 className="font-bold text-xl md:text-4xl">
          Stay productive,
          <br /> wherever you are
        </h3>
        <p className="mt-6 mb-4 md:text-lg">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="mb-4 md:text-lg">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="flex gap-4 items-center text-[#65e2d9]  border-b-2 w-fit border-[#65e2d9] pb-1"
        >
          <span>See how Fylo works</span>
          <svg
            width="25"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <circle id="b" cx="6" cy="6" r="6" />
              <filter
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="1"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                  in="shadowBlurOuter1"
                />
              </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(2 2)">
                <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                <use fill="#62E0D9" xlinkHref="#b" />
              </g>
              <path
                d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                fill="#1B2330"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default StayProductive;
