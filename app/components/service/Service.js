import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAssistantDirection } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";

const Service = () => {
  return (
    <>
      <div className="max-w-[1320px] md:py-[80] py-4 mx-auto">
        <h1 className="text-4xl text-center font-bold -mt-10 lg:mt-0">
          Our Services
        </h1>
      </div>

      <div className="max-w-[1000px] -mt-7 mx-5 py-[60px] grid lg:grid-cols-3 sm:grid-cols-2 gap-6 lg:mx-auto">
        <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
          <span className="flex justify-center items-center text-xl">
            <RiCustomerService2Fill size={60} />
          </span>
          <h1 className="text-xl py-5">Free support</h1>
          <p>
            On what matters most free <br /> matching support optional
          </p>
          <p className="pt-6">Learn More &#129058;</p>
        </div>
        <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
          <span className="flex justify-center items-center text-xl">
            <MdAssistantDirection size={60} />
          </span>
          <h1 className="text-xl py-5">Easy to Use</h1>
          <p>
            An easy-to-use online directory <br /> that lets you search and
            filter
          </p>
          <p className="pt-6">Learn More &#129058;</p>
        </div>
        <div className="shadow-lg p-4 py-[2rem] text-center hover:bg-indigo-500 hover:text-white duration-500 ease-in-out">
          <span className="flex justify-center items-center text-xl">
            <HiStatusOnline size={60} />
          </span>
          <h1 className="text-xl py-5">Online care</h1>
          <p>
            One-to-one matching for <br /> experience support you
          </p>
          <p className="pt-6">Learn More &#129058;</p>
        </div>
      </div>
    </>
  );
};

export default Service;
