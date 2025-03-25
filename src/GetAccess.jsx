import { useState } from "react";
import BlueButton from "./BlueButton";
function GetAccess() {
  const [invalid, setInvalid] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email);
  function onSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setInvalid(!emailRegex.test(email));
  }
  return (
    <div className="text-white px-6 py-10 text-center shadow-2xl bg-[#1c2431] mx-4 mb-24 rounded-xl max-w-[1000px] md:mx-auto md:p-12 relative">
      <h3 className="font-bold text-xl md:text-3xl">Get early access today</h3>
      <p className="my-4 md:text-lg md:my-8 md:mx-6">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        className="md:flex md:items-center md:gap-4"
        onSubmit={onSubmit}
        noValidate
      >
        <input
          className="invalid: bg-white text-black  rounded-4xl w-[100%] pl-8 py-4 mb-4 md:mb-0 md:w-[60%] shadow-2xl focus:outline-2 focus:outline-blue-400"
          type="email"
          name=""
          id=""
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <BlueButton
          text="Get Started For Free"
          width=" w-[100%] md:w-[40%]"
        ></BlueButton>
      </form>
      {invalid && (
        <span className="absolute top-[88%] left-[10%] text-left text-[#ff4242] font-bold text-sm">
          Please enter a valid email address
        </span>
      )}
    </div>
  );
}
export default GetAccess;
