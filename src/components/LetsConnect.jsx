import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import InputField from "./InputField";

export default function LetsConnect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE") {
      toast.error("Please configure the Google Sheets backend URL first.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", description: "" });
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // CLEAN EMAIL LIST (no X symbols here)
  const emails = [
    "business@appnity.co.in",
    "business@appnity.co.in",
    "business@appnity.co.in",
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#dbdbdb" }}
    >
      <Toaster position="top-center" />
      {/* BIG HEADING */}
      <div className="relative h-60 sm:h-72 md:h-96 lg:h-[28rem] flex items-center justify-center overflow-hidden">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold text-center leading-none tracking-tight bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.05)_100%)] bg-clip-text text-transparent opacity-40">
          Let's Connect
        </h1>
      </div>

      {/* FORM SECTION */}
      <div className="relative mt-[-6rem] sm:mt-[-8rem] w-auto z-10 lg:mx-3 lg:mt-[-12rem] mx-2">
        <div
          className="w-full min-h-[600px] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden flex justify-center px-4 sm:px-8 md:px-14 lg:px-20 py-20 sm:py-28 md:py-32"
          style={{
            backgroundImage:
              'url("https://framerusercontent.com/images/1sREGvYWbdhqXmijCOMUIsD7A.png?scale-down-to=2048")',
          }}
        >
          <div className="relative z-10 w-full max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
              {/* LEFT TEXT */}
              <div className="text-white px-2 sm:px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10">
                  <b>
                    Got a project in <br /> mind?
                  </b>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg">
                  Let's make something happen together
                </p>
              </div>

              {/* RIGHT FORM */}
              <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                  <InputField
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    variant="minimal"
                    required
                  />

                  <InputField
                    name="email"
                    type="email"
                    label="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter the Email"
                    variant="minimal"
                    required
                  />

                  <InputField
                    name="description"
                    type="textarea"
                    label="Project Description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Type Here..."
                    variant="minimal"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-black text-sm py-3 rounded-full hover:bg-gray-200 font-bold transition-all mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Now!"}
                  </button>
                </form>
              </div>
            </div>

            {/* ---- FIXED FRAMER MOTION MARQUEE (NO GAP) ---- */}
            <div className="mt-32 sm:mt-44 md:mt-56 w-full overflow-hidden">
              <motion.div
                className="flex items-center gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }} // only half because we duplicate
                transition={{
                  duration: 16,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {/* ORIGINAL EMAIL ROW */}
                {emails.map((email, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="text-white/40 text-3xl">×</span>
                    <span className="text-white text-2xl font-semibold hover:text-orange-500">
                      {email}
                    </span>
                  </div>
                ))}

                {/* DUPLICATED ROW FOR SEAMLESS INFINITE SCROLL */}
                {emails.map((email, idx) => (
                  <div key={`dup-${idx}`} className="flex items-center gap-4">
                    <span className="text-white/40 text-3xl">×</span>
                    <span className="text-white text-2xl font-semibold hover:text-orange-500">
                      {email}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
