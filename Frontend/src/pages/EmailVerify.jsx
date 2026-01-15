import React from "react";
import { assets } from "../assets/assets";

export const EmailVerify = () => {
  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.target.value === "" && index > 0 && e.key === "Backspace") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("Text");
    pasteData.split("").forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />

      <form
        action="#"
        className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
      >
        <h2 className="text-indigo-300 text-2xl mb-6 text-center">
          Email Verification
        </h2>
        <p className="text-gray-300 mb-4 text-center">
          Please enter the 6-digit verification code sent to your email address.
        </p>
        <div className="flex justify-between mb-8" onPaste={handlePaste}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="text"
                name={`otp${index + 1}`}
                required
                maxLength="1"
                ref={(e) => (inputRefs.current[index] = e)}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-10 h-10 text-center border border-gray-600 rounded bg-slate-800 text-white focus:outline-none focus:border-indigo-500"
              />
            ))}
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors">
          Verify Email
        </button>
      </form>
    </div>
  );
};
