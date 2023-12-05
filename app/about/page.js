import Image from "next/image";
import person1 from "../../public/person.jpg";
import person2 from "../../public/person2.jpg";
import person3 from "../../public/person3.jpg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAssistantDirection } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";

const About = () => {
  return (
    <>
      <div className="custom-img">
        <article className="text-center px-[10px] flex justify-center lg:px-[100px] lg:py-[100px] md:">
          <div className="max-w-3xl my-16 flex-cols items-center">
            <h1 className="text-blue-100 p-5 text-2xl mt-16 lg:mt-0 md:text-3xl md:font-bold">
              To become the community's top choice in providing cutting-edge,
              comprehensive, and innovative digital health solutions to enhance
              the quality of life.
            </h1>
          </div>
        </article>
      </div>
      <div className="flex justify-center my-16">
        <div className="text-center max-w-5xl mx-2 lg:mx-0">
          <h1 className="my-5 text-black text-2xl font-bold">
            The World's No. 1 Trusted Health Platform
          </h1>
          <p className="text-black text-left mx-5 md:mx-3">
            HealthCare is the world's number one digital health platform with
            over 100 million active users every month, and more than 100,000
            doctors on board. Since 2021, HealthCare has excelled in providing
            accurate, easily understandable health information accessible to
            anyone, anytime, and anywhere. All health information available on
            HealthCare is presented in clear and comprehensible English,
            reviewed by a competent team of doctors.
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-5 justify-center gap-12 md:flex-row md:mx-10">
        <div className="max-w-lg">
          <h1 className="font-bold">
            The Most Comprehensive Healthcare Service at Every Step of the
            User's Medical Journey
          </h1>
          <br />
          <p>
            As the world's most comprehensive health platform with the fastest
            growth, HealthCare provides 5 key features beneficial for people
            worldwide to make informed health decisions for themselves and their
            families: chat with doctors, schedule consultations and/or find
            preferred hospitals, the most extensive health articles in English,
            additional health protection with HealthCare Protection, and
            convenience for purchasing health necessities. HealthCare also has a
            dedicated platform, HealthCare, specifically designed for doctors to
            support the continuous flow of medical information among healthcare
            professionals, with the aim of improving the quality of healthcare
            services globally.
          </p>
        </div>
        <div className="max-w-lg">
          <h1 className="font-bold">
            Easy and Fast Access for the Quality Future of Global Health
          </h1>
          <br />
          <p>
            All HealthCare features are available in both web and mobile app
            versions, easily accessible through computers and smartphones
            worldwide, anytime, anywhere. Enjoy the convenience of searching for
            the most comprehensive health information with quick responses, as
            well as accessing experienced general practitioners and specialists
            distributed globally. HealthCare assists the global community in
            making the best decisions regarding the health of themselves and
            their beloved families.
          </p>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:mb-6">
              Team Members
            </h1>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto lg:pb-[50px]">
              When you interact with our team at HealthCare, you engage with
              experts who are committed to providing an unparalleled health
              experience. Let's get to know our enthusiastic and experienced
              team members more closely, who work hard to ensure that you
              receive the best healthcare at all times.
            </p>
          </div>
          <div className="py-20 grid gap-28 md:gap-12 md:grid-cols-3 mx-10">
            <div className="border-t-4 space-y-8 group">
              <div className="w-32 h-32 -mt-16 mx-auto max-auto rounded-[2rem] rotate-45 overflow-hidden">
                <Image
                  src={person1}
                  alt="image mowen1"
                  loading="lazy"
                  width={640}
                  height={805}
                  className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                  placeholder="blur"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl text-gray-800 font-semibold">
                  Dr. Louise Hewitt
                </h1>
                <span className="text-gray-500">Chief Medical Officer</span>
              </div>
              <div className="text-center">
                <p>
                  After earning a medical degree, Dr. Louise completed training
                  in Emergency Medicine in Australia, specializing in Trauma and
                  Toxicology Management. Her passion for Health Education, for
                  both patients and doctors, has led her to work in many
                  countries in Southeast Asia, in particular.
                </p>
              </div>
            </div>
            <div className="border-t-4 space-y-8 group">
              <div className="w-32 h-32 -mt-16 mx-auto max-auto rounded-[2rem] rotate-45 overflow-hidden">
                <Image
                  src={person2}
                  alt="image mowen2"
                  loading="lazy"
                  width={640}
                  height={805}
                  className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                  placeholder="blur"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl text-gray-800 font-semibold">
                  Dr. Lisa Johnson
                </h1>
                <span className="text-gray-500">
                  Head of Customer Experience
                </span>
              </div>
              <div className="text-center">
                <p>
                  brings over 15 years of experience in internal medicine and
                  telehealth. She has a proven track record of providing quality
                  healthcare services both in traditional settings and online
                  platforms. Dr. Lisa is passionate about leveraging technology
                  to improve patient outcomes.{" "}
                </p>
              </div>
            </div>
            <div className="border-t-4 space-y-8 group">
              <div className="w-32 h-32 -mt-16 mx-auto max-auto rounded-[2rem] rotate-45 overflow-hidden">
                <Image
                  src={person3}
                  alt="image mowen3"
                  loading="lazy"
                  width={640}
                  height={805}
                  className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                  placeholder="blur"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl text-gray-800 font-semibold">
                  Dr. Alasky
                </h1>
                <span className="text-gray-500">Cheif Operations</span>
              </div>
              <div className="text-center">
                <p>
                  {" "}
                  leads our technology and product development teams. With a
                  background in computer science and a decade of experience in
                  healthcare technology, Sarah has been instrumental in
                  implementing innovative features that enhance the user
                  experience on the HealthCare platform.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10 space-y-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl md:pb-3">
              Company Values and Culture
            </h1>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
              Welcome to HealthCare, where we not only provide cutting-edge
              healthcare services but also cultivate a culture based on our core
              values. Here, we establish a foundation of collaboration,
              innovation, and exceptional customer service, creating an
              environment where each individual plays a crucial role in
              embracing a better future for healthcare.
            </p>
          </div>
          <div className="max-w-[1000px] mx-auto py-[30px] grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
              <span className="flex justify-center items-center text-xl">
                <RiCustomerService2Fill size={60} />
              </span>
              <h1 className="text-xl py-5">Quality Service</h1>
              <p>
                Focus on providing high-quality healthcare services to
                application users
              </p>
              <p className="pt-6">Learn More &#129058;</p>
            </div>
            <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
              <span className="flex justify-center items-center text-xl">
                <MdAssistantDirection size={60} />
              </span>
              <h1 className="text-xl py-5">Innovation and Technology</h1>
              <p>
                The values that drive innovation in healthcare technology and
                the utilization of technology to enhance access and quality of
                healthcare services.
              </p>
              <p className="pt-6">Learn More &#129058;</p>
            </div>
            <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
              <span className="flex justify-center items-center text-xl">
                <HiStatusOnline size={60} />
              </span>
              <h1 className="text-xl py-5">The Importance of Patients</h1>
              <p>
                Emphasis on patient satisfaction and well-being, with a
                commitment to understanding and fulfilling their needs.
              </p>
              <p className="pt-6">Learn More &#129058;</p>
            </div>
            <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
              <span className="flex justify-center items-center text-xl">
                <RiCustomerService2Fill size={60} />
              </span>
              <h1 className="text-xl py-5">Team Collaboration</h1>
              <p>
                A collaborative culture that encourages teamwork across various
                departments and levels within the organization to achieve common
                goals.
              </p>
              <p className="pt-6">Learn More &#129058;</p>
            </div>
            <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
              <span className="flex justify-center items-center text-xl">
                <MdAssistantDirection size={60} />
              </span>
              <h1 className="text-xl py-5">Professional Ethics</h1>
              <p>
                Strong ethical values in providing healthcare services,
                including patient privacy, data security, and medical ethical
                standards.
              </p>
              <p className="pt-6">Learn More &#129058;</p>
            </div>
            <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
              <span className="flex justify-center items-center text-xl">
                <HiStatusOnline size={60} />
              </span>
              <h1 className="text-xl py-5">Employee Empowerment</h1>
              <p>
                Focus on professional development and employee well-being,
                including training programs, mental health support, and
                workplace flexibility.
              </p>
              <p className="pt-6">Learn More &#129058;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
