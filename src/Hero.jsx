import BlueButton from "./BlueButton";
function Hero() {
  return (
    <div className="text-white text-center mx-4 max-w-[650px] md:m-auto ">
      <img
        className="my-8 mx-auto w-[90%]"
        src="../src/assets/illustration-intro.png"
        alt="sa"
      />
      <h2 className="text-2xl font-bold font-raleway md:text-3xl">
        All your files in one secure location, accessible anywhere.
      </h2>
      <p className="my-7 md:text-lg">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <BlueButton text="Get Started"></BlueButton>
    </div>
  );
}

export default Hero;
