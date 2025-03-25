import Header from "./Header";
import Hero from "./Hero";
import BenefitCard from "./BenefitCard";
import StayProductive from "./StayProductive";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
const testimonials = [
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
    img: "./src/assets/profile-1.jpg",
    name: "Satish Patel",
    position: "Founder & CEO, Huddle",
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: "./src/assets/profile-2.jpg",
    name: " Bruce McKenzie",
    position: "Founder & CEO, Huddle",
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
    img: "./src/assets/profile-3.jpg",
    name: "Iva Boydl",
    position: "Founder & CEO, Huddle",
  },
];
function App() {
  return (
    <div className="font-open-sans bg-[url(./src/assets/bg-curvy-desktop.svg)] ">
      <Header></Header>
      <Hero></Hero>
      <div className="my-18 md:grid md:grid-cols-2 max-w-[1000px] md:mx-auto md:gap-22">
        <BenefitCard
          img="./src/assets/icon-access-anywhere.svg"
          title="Access your files, anywhere"
          text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        ></BenefitCard>

        <BenefitCard
          img="./src/assets/icon-security.svg"
          title="Security you can trust"
          text=" 2-factor authentication and user-controlled encryption are just a couple of the security 
                features we allow to help secure your files."
        ></BenefitCard>
        <BenefitCard
          img="./src/assets/icon-collaboration.svg"
          title="Real-time collaboration"
          text="Securely share files and folders with friends, family and colleagues for live collaboration. 
                No email attachments required."
        ></BenefitCard>
        <BenefitCard
          img="./src/assets/icon-any-file.svg"
          title="Store any type of file"
          text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                file types to be securely stored and shared."
        ></BenefitCard>
      </div>
      <StayProductive></StayProductive>
      <div className="flex justify-center ">
        <div className="my-8 mx-12  md:flex md:justify-between md:gap-8 md:relative md:x-20 max-w-[1450px] 2xl:mx-auto">
          <img
            className="ml-4 w-[60px] md:absolute md:top-[-40px] md:left-[-35px] md:z-[-1]"
            src="./src/assets/bg-quotes.png"
            alt=""
          />
          {testimonials.map((testimonial) => (
            <Testimonial
              key={crypto.randomUUID()}
              text={testimonial.text}
              img={testimonial.img}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
