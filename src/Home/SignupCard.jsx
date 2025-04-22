import { useState } from "react";

export default function SignupCard() {
  const [email, setEmail] = useState("");

  return (
    <div className="mx-auto">
      {/* Signup Section */}
      <div className="text-center mb-8 py-12 px-4 sm:px-15 md:px-35 lg:px-70 xl:px-100 bg-gray-200">
        <h2 className="text-2xl lg:text-4xl pb-2 font-bold">
          Want First Dibs?
        </h2>
        <p className="text-gray-600 mt-2">
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </p>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full md:ms-6 px-4 py-2 border-b-2 bg-white border-slate-900 focus:outline-none focus:border-slate-900 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full md:w-auto min-w-fit px-6 py-2 bg-black text-white  hover:bg-white hover:text-black cursor-pointer">
            SIGN UP
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2">
          Note: You can opt-out at any time. See our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms
          </a>
          .
        </p>
      </div>

      {/* Information Section */}
      <div>
        <h1 className="px-5 lg:px-30 pt-3 pb-8 text-2xl sm:text-3xl md:text-4xl capitalize">
          The earthstride approach
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 px-5 lg:px-30 text-left">
        <div className="flex flex-col h-full">
          <h3 className="font-semibold text-lg">Wear-All-Day Comfort</h3>
          <p className="text-gray-600 mt-1">
            Lightweight, bouncy, and wildly comfortable, EarthStride shoes make any
            outing feel effortless.
          </p>
          <a href="#" className="text-gray-800 border-b-1 mt-auto max-w-fit inline">
            Learn More
          </a>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="font-semibold text-lg">
            Sustainability In Every Step
          </h3>
          <p className="text-gray-600 mt-1">
            From materials to transport, we’re working to reduce our carbon
            footprint to near zero.
          </p>
          <a href="#" className="text-gray-800 border-b-1 mt-auto max-w-fit inline">
            Learn More
          </a>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="font-semibold text-lg">Materials From The Earth</h3>
          <p className="text-gray-600 mt-1">
            We replace petroleum-based synthetics with natural alternatives
            wherever we can. Like using wool, tree fiber, and sugar cane.
          </p>
          <a href="#" className="text-gray-800 border-b-1 max-w-fit mt-auto inline">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
