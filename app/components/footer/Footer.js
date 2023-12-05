import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl max-auto">
          <div className="grid grid-col-1 md:gird-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h1 className="text-2xl pb-4">Company</h1>
              <p className="text-gray-300">
                A123 Star Strett <br />
                Los angles, AD 12321 <br />
                Amerika <br /> <br />
                <strong>Phone:</strong>+1 1231 1231 <br />
                <strong>Email:</strong>healthCare@mail.com <br />
              </p>
            </div>
            <div className="mb-5">
              <h1 className="pb-4">Useful Links</h1>
              <ul className="text-gray-300">
                <li className="pb-3">
                  <Link href={"/"} className="hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href={"/about"} className="hover:text-blue-500">
                    About us
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href={"/services"} className="hover:text-blue-500">
                    Service / Products
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href={"/ourteam"} className="hover:text-blue-500">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h1 className="pb-4">Our Service</h1>
              <ul className="text-gray-300">
                <li className="pb-3">
                  <Link href="/services" className="hover:text-blue-500">
                    Basic Package
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/services" className="hover:text-blue-500">
                    Premium Package
                  </Link>
                </li>
                <li className="pb-3">
                  <Link href="/services" className="hover:text-blue-500">
                    Premium Plus Package
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-gray-300">
              <h1 className="pb-4">Join Our Newsletter</h1>
              <p className="text-gray-300 pb-2">
                Join 100,000 + others and never miss out on new tips, tutorials,
                and more
              </p>
              <form className="flex flex-row flex-wrap">
                <input
                  type="text"
                  className="text-[#545769] w-2/3 p-2 focus:border-blue-500"
                  placeholder="email@example.com"
                />{" "}
                <br />
                <button className="p-2 w-1/3 bg-blue-600 text-white hover:bg-blue-500">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-white px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 max-auto justify-between items-center">
          <div className="text-center">
            <div>
              Copyright{" "}
              <strong>
                <span>HealhCare</span>
              </strong>
              . All Rights Reserved
            </div>
            <div>
              Designed by{" "}
              <Link href="#" className="text-white">
                Lee Suy
              </Link>
            </div>
          </div>
          <div className="text-center text-xl text-white">
            <Link
              href="https://twitter.com"
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
              aria-label="Twitter"
            >
              <FaTwitter className="mx-auto my-[6px]" />{" "}
            </Link>
            <Link
              href="https://www.instagram.com"
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
              aria-label="Instagram"
            >
              <AiFillInstagram className="mx-auto my-[6px]" />{" "}
            </Link>
            <Link
              href="https://web.facebook.com/"
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
              aria-label="Facebook"
            >
              <FaFacebookSquare className="mx-auto my-[6px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
              aria-label="Linkedin"
            >
              <FaLinkedin className="mx-auto my-[6px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
