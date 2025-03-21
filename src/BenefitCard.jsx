import PropTypes from "prop-types";
function BenefitCard({ img, title, text }) {
  return (
    <div className="flex flex-col items-center gap-4 my-8 text-center text-white p-6 ">
      <img src={img} alt="benefit illustration" />
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="">{text}</p>
    </div>
  );
}

BenefitCard.PropTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default BenefitCard;
