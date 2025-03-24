function Testimonial({ text, img, name, position }) {
  return (
    <div className="p-8 text-white bg-[#202a3c] mb-8">
      <p className="text-sm">{text}</p>
      <div className="flex items-center gap-5 mt-8 ">
        <img className="w-[40px] rounded-full" src={img} alt={name} />
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-xs">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
