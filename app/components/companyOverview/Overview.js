import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import overview from "../../../public/doctor2.jpg";

const Overview = () => {
  return (
    <section className="py-5 flex justify-center -mt-20 lg:mt-0">
      <div className="container flex flex-wrap items-center justify-center max-auto mt-10 md:px-12 md:flex-row md:ml-[2rem] md:my-7">
        <div className="lg:w-1/2">
          <Image src={overview} alt="img" loading="eager" placeholder="blur" />
        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2 lg:text-center">
          <h1 className="max-w-xl text-[2.6rem] mt-5 leading-none text-gray-900 font-extrabold font-sans text-center lg:text-5xl lg:text-center lg:leading-tight mb-5">
            Affordable Health <br /> Care Solutions
          </h1>
          <p className="max-w-xl text-center my-5 text-gray-500 lg:text-center lg:max-w-md lg:mx-auto">
            We value your time so we set up all your accounts <br /> billing and
            cost through one payment that we take <br /> out of the box founder
            centre
          </p>
          <div className="flex font-bold justify-center gap-1 items-center text-[#0755B6] lg:justify-center ">
            <FaCheckCircle className="text-xl" />
            <p>430+ Happy Patients</p>
          </div>
          <div className=" flex font-bold ml-[-8px] justify-center gap-1 items-center text-[#0755B6] lg:justify-center lg:ml-[-8px]">
            <FaCheckCircle className="text-xl" /> <p>350+ Happy Rooms</p>
          </div>
          <div className="flex font-bold gap-1 justify-center items-center text-[#0755B6] lg:justify-center">
            <FaCheckCircle className="text-xl" /> <p>100+ Expert Doctors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
