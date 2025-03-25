import PropTypes, { string } from "prop-types";

function Links({ links }) {
  return (
    <div className="flex flex-col text-white gap-2.5 my-8 md:my-0">
      {links.map((link) => (
        <a key={crypto.randomUUID()} href="#">
          {link}
        </a>
      ))}
    </div>
  );
}

Links.PropTypes = {
  links: PropTypes.arrayOf(string),
};
export default Links;
