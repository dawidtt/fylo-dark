import PropTypes from "prop-types";
function BlueButton({ text }) {
  return (
    <button className="font-bold shadow-2xl px-18 py-4 rounded-4xl  hover:cursor-pointer hover:bg-blue-300 gradient">
      {text}
    </button>
  );
}

BlueButton.PropTypes = {
  text: PropTypes.string,
};
export default BlueButton;
