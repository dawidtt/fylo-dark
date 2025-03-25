import BlueButton from "./BlueButton";
function GetAccess() {
  return (
    <div className="text-white px-6 py-10 text-center shadow-2xl bg-[#1c2431] mx-4 mb-24 rounded-xl max-w-[1000px] md:mx-auto md:p-12">
      <h3 className="font-bold text-xl md:text-3xl">Get early access today</h3>
      <p className="my-4 md:text-lg md:my-8 md:mx-6">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="md:flex md:items-center md:gap-4">
        <input
          className="bg-white text-black  rounded-4xl w-[100%] pl-8 py-4 mb-4 md:mb-0 md:w-[60%]"
          type="email"
          name=""
          id=""
          placeholder="email@example.com"
        />
        <BlueButton
          text="Get Started For Free"
          width=" w-[100%] md:w-[40%]"
        ></BlueButton>
      </form>
    </div>
  );
}
export default GetAccess;
