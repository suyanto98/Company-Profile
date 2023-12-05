import Image from "next/image";
import heroSection from "../../../public/doctor.jpg";

function HeroSection() {
  return (
    <section id="home" className="py-5 flex justify-center">
      <div className="container flex flex-wrap  items-center justify-center max-auto mt-10 md:px-12 md:flex-row md:ml-[2rem] max-lg:flex-col-reverse sm:my-0 md:my-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold mt-5 font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
            Your Good <br />
            Health Makes <br /> Your Happiness
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            We are here for your care. Your health is our first priority so we
            are ready to help you with your health consultation
          </p>
          <div className="flex justify-center mt-8 md:mt-14 lg:justify-start">
            <button
              type="button"
              className="text-white bg-blue-600 font-medium rounded-lg px-5 py-4 text-center hover:bg-blue-500 hover:drop-shadow-sm transition duration-300 ease-in-out"
            >
              Get Apointment
            </button>
            <button
              type="button"
              className="ml-4 text-gray-900 bg-gray-200 font-medium rounded-lg px-5 py-4 text-center hover:bg-gray-300 hover:drop-shadow-sm transition duration-300 ease-in-out"
            >
              Wacth Video
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={heroSection}
            alt="hero-img"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
