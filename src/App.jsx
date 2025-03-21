import Header from "./Header";
import Hero from "./Hero";
import BenefitCard from "./BenefitCard";
function App() {
  return (
    <div className="font-open-sans">
      <Header></Header>
      <Hero></Hero>
      <div className="my-18">
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
    </div>
  );
}

export default App;
