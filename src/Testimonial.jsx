function Testimonial({ text, img, name, position }) {
  return (
    <div className="p-8 text-white bg-[#202a3c] mb-8 max-w-[450px] rounded-md">
      <p className="text-sm md:text-base">{text}</p>
      <div className="flex items-center gap-5 mt-8 ">
        <img
          className="w-[40px] md:w-[60px] rounded-full"
          src={img}
          alt={name}
        />
        <div>
          <h4 className="font-bold text-sm md:text-base">{name}</h4>
          <p className="text-xs md:text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
