import Image from "next/image";
import person1 from "../../../public/person.jpg";
import person2 from "../../../public/person2.jpg";
import person3 from "../../../public/person3.jpg";

const Testimonial = () => {
  return (
    <div className="text-center py-10 -mt-5 lg:mt-0">
      <h1 className="text-lg">Testimonials</h1>
      <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
        Heare Our <br /> Patient Opinions
      </h1>
      <div className="flex max-w-5xl gap-8 group flex-col mx-5 lg:mx-auto lg:flex-row">
        <div className="bg-white/10 p-8 shadow-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <Image
            src={person1}
            alt="person1"
            className="rounded-[50%] h-20 w-20 mx-auto"
            loading="eager"
            placeholder="blur"
          />
          <h1 className="uppercase text-lg font-bold mt-3">Alice Agatha</h1>
          <p className="text-sm leading-7 my-3 text-[#595959]">
            I am very satisfied with the experience of using HealthCare for
            online doctor consultations. In addition to being able to consult
            with quality doctors from the comfort of my home, the interface is
            very user-friendly. The quick and professional service makes me feel
            assured in maintaining my health. Thank you, HealthCare!
          </p>
        </div>
        <div className="bg-white/10 p-8 shadow-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <Image
            src={person2}
            alt="person2"
            className="rounded-[50%] h-20 w-20 mx-auto"
            loading="eager"
            placeholder="blur"
          />
          <h1 className="uppercase text-lg font-bold mt-3">Clara Catalina</h1>
          <p className="text-sm leading-7 my-3 text-[#595959]">
            I have used HealthCare for several doctor consultations, and I am
            very pleased with the variety of available doctor options. I can
            choose a doctor that suits my needs, and each doctor provides
            excellent service. This application helps me feel more connected to
            my health choices.
          </p>
        </div>
        <div className="bg-white/10 p-8 shadow-lg cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100">
          <Image
            src={person3}
            alt="person3"
            className="rounded-[50%] h-20 w-20 mx-auto"
            loading="eager"
            placeholder="blur"
          />
          <h1 className="uppercase text-lg font-bold mt-3">Angelina Debora</h1>
          <p className="text-sm leading-7 my-3 text-[#595959]">
            I always prioritize safety when choosing online healthcare services,
            and HealthCare provides full confidence. My health data and
            information are well-protected, and consultations with doctors feel
            very secure and private. HealthCare truly provides a reliable
            healthcare solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
