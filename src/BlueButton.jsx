import PropTypes from "prop-types";
function BlueButton({ text }) {
  return (
    <button className="font-raleway font-bold shadow-2xl px-18 py-4 rounded-4xl  hover:cursor-pointer hover:scale-102 gradient">
      {text}
    </button>
  );
}

BlueButton.PropTypes = {
  text: PropTypes.string,
};
export default BlueButton;
