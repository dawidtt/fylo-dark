import PropTypes from "prop-types";
function IconWithText({ icon, text }) {
  return (
    <div className="flex text-white items-start gap-6 my-4">
      <img className="w-4" src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
}

IconWithText.PropTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
export default IconWithText;
