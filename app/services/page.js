import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="mx-auto max-w-5xl bg-white px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <h2 className="text-3xl font-extrabold text-black text-center sm:text-5xl sm:leading-tight sm:tracking-tight">
          HealthCare Package Options for Optimal Health
        </h2>
        <p className="mt-4 max-w-3xl text-center text-lg text-slate-500 mx-auto">
          All these services can be accessed through the HealthCare app,
          providing unlimited convenience and accessibility. With advanced
          technology, HealthCare aims to deliver easily accessible, fast, and
          efficient health solutions.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl lg:grid-cols-3 gap-12 lg:gap-8 py-10 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex flex-col">
          <h3 className="text-lg font-semibold leading-5">Basic Package</h3>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            The Basic Package provides essential access to utilize HealthCare
            services. With a monthly fee of USD$20/month, users can access
            features such as consultation through text chat with doctors,
            storing digital health records, and submitting prescriptions online.
            This package is suitable for those seeking basic services without
            additional complex features.
          </p>
          <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
            <p className="flex items-center text-sm font-semibold text-slate-500">
              <span>USD$</span>
              <span className="ml-3 text-4xl text-slate-900">20</span>
              <span className="ml-1.5">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-4 flex-1">
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Unlimited access to doctors through text chat.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Priority in securing consultation appointments.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Digital health record storage.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Doctor selection based on specialization.
              </span>
            </li>
          </ul>
          <Link
            href="#"
            className="mt-8 block rounded-lg px-6 py-4 text-center text-sm font-semibold leading-4 text-cyan-700 bg-cyan-50 hover:bg-cyan-100 shadow-md"
          >
            Start your trial
          </Link>
        </div>

        <div className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex flex-col">
          <p className="top-0 max-w-[113px] -mt-11  bg-blue-600 text-white px-3 py-0 text-sm font-semibold rounded-full shadow-md">
            Most Populer
          </p>
          <h3 className="text-lg font-semibold leading-5 mt-6">
            Premium Package
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            With a monthly fee of USD$20, the Premium Package offers additional
            services including video call consultations, priority in scheduling
            appointments, quick access to emergency services, and 24/7 chat
            support with doctors. Suitable for users seeking more comprehensive
            and responsive healthcare services.
          </p>
          <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
            <p className="flex items-center text-sm font-semibold text-slate-500">
              <span>USD$</span>
              <span className="ml-3 text-4xl text-slate-900">50</span>
              <span className="ml-1.5">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-4 flex-1">
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Direct consultation with a doctor via video call.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Priority access to emergency services.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Digital prescription delivery.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Notices regarding consultation appointments and schedules.
              </span>
            </li>
          </ul>
          <Link
            href="#"
            className="mt-8 block rounded-lg px-6 py-4 text-center text-sm font-semibold leading-4 text-white bg-blue-600 hover:bg-blue-700 shadow-md"
          >
            Start your trial
          </Link>
        </div>

        <div className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex flex-col">
          <h3 className="text-lg font-semibold leading-5">
            Premium Plus Package
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            The Premium Plus Package is the best choice for those seeking a
            comprehensive digital healthcare experience. With a monthly fee of
            USD$100, users can enjoy family consultations, exclusive access to
            top-tier doctors, personal health management, and health-related
            notifications. This package is designed to provide a comprehensive
            solution for the healthcare needs of the entire family.
          </p>
          <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
            <p className="flex items-center text-sm font-semibold text-slate-500">
              <span>USD$</span>
              <span className="ml-3 text-4xl text-slate-900">100</span>
              <span className="ml-1.5">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-4 flex-1">
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Consultation with a doctor anytime, 24 hours a day, 7 days a
                week.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Exclusive service with access to renowned doctors.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Priority in scheduling consultation appointments.
              </span>
            </li>
            <li className="text-sm text-slate-700 leading-6 flex">
              <FaCheck className="h-5 w-5 text-cyan-500 shrink-0 " />{" "}
              <span className="ml-2 font-bold">
                Access to health monitoring tools for loyal users.
              </span>
            </li>
          </ul>
          <Link
            href="#"
            className="mt-8 block rounded-lg px-6 py-4 text-center text-sm font-semibold leading-4 text-cyan-700 bg-cyan-50 hover:bg-cyan-100 shadow-md"
          >
            Start your trial
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
