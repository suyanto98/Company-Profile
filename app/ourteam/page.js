"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import bg from "../../public/kantor.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";

const OurTeams = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setUserData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="container mx-auto mt-5 px-6 md:px-12 lg:px-8">
        <div className="mb-10 space-y-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Team Members
          </h1>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
            At HealthCare, we have the privilege of having a talented and
            dedicated team working together to bring innovation to healthcare
            services. Each member of our team brings their unique experience and
            knowledge to assist you in achieving better health. Let's discover
            who is behind the scenes, ready to guide and support your health
            journey with us.
          </p>
        </div>
      </section>

      <section className="flex justify-center m-15 box-border transition-all duration-200 ease-linear mb-12">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {userData.map((user, index) => (
            <div
              className="h-[450px] w-[290px] m-[20px] shadow-md rounded-[10px] overflow-hidden text-center bg-gray-100"
              key={index}
            >
              <div className="bg-image">
                <Image
                  src={bg}
                  alt=""
                  className="w-[100%] h-[230px] object-cover clip-polygon"
                />
              </div>
              <div className="pic">
                <img
                  src={user.picture.large}
                  alt="Random User Image"
                  width={300}
                  height={300}
                  className="h-[120px] w-[120px] rounded-full border-[7px] border-solid border-gray-800 mt-[-85px] relative mx-auto"
                />
              </div>
              <div className="info">
                <h1 className="text-[20px] py-[10px]">{user.name.first}</h1>
                <span className="flex items-center gap-2 justify-center text-[15px] text-blue-700 pb-2">
                  <FaUserDoctor /> Primary Care Physician
                </span>
                <div className="flex flex-col justify-center items-center gap-2 text-[15px] no-underline mt-10px] px-[5px]">
                  <Link
                    href="#"
                    className="hover:text-blue-500 flex items-center"
                  >
                    <MdEmail />
                    <span className="mx-2">{user.email}</span>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-blue-500 flex items-center"
                  >
                    <FaPhoneAlt />
                    <span className="mx-2">{user.phone}</span>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-blue-500 flex items-center"
                  >
                    <GiSmartphone />
                    <span className="mx-2">{user.cell}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurTeams;
