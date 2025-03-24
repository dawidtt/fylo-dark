import PropTypes from "prop-types";
function BlueButton({ text, width = " w-auto" }) {
  return (
    <button
      className={
        "font-raleway font-bold shadow-2xl px-18 py-4 rounded-4xl  hover:cursor-pointer hover:scale-102 gradient" +
        width
      }
    >
      {text}
    </button>
  );
}

BlueButton.PropTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
};
export default BlueButton;
