import React from "react";

export default function ContactPage() {
  return (
    <section className="w-full bg-gray-200 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* ---------------- LEFT : FORM ---------------- */}
        <div>
          <p className="text-gray-600 mb-2">(Contact)</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Get In Touch</h1>

          <form className="space-y-10">

            {/* Input Group */}
            <div className="relative group">
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 peer"
              />
              <label className="absolute left-0 text-gray-600 transition-all duration-300 
                peer-focus:text-black peer-focus:text-sm peer-focus:-top-2
                peer-valid:text-sm peer-valid:-top-2
                top-4">
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 peer"
              />
              <label className="absolute left-0 text-gray-600 transition-all duration-300 
                peer-focus:text-black peer-focus:text-sm peer-focus:-top-2
                peer-valid:text-sm peer-valid:-top-2
                top-4">
                Your Email
              </label>
            </div>

            {/* Select */}
            <div className="relative group">
              <select
                required
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 text-gray-800 peer"
              >
                <option value=""></option>
                <option>UI/UX Design</option>
                <option>Website Development</option>
                <option>Branding</option>
                <option>Marketing Strategy</option>
              </select>
              <label className="absolute left-0 text-gray-600 transition-all duration-300
                peer-focus:text-black peer-focus:text-sm peer-focus:-top-2
                peer-valid:text-sm peer-valid:-top-2
                top-4">
                What you need from us?
              </label>
            </div>

            {/* Textarea */}
            <div className="relative group">
              <textarea
                required
                rows="4"
                className="w-full bg-transparent border-b border-gray-400 outline-none py-3 peer resize-none"
              ></textarea>

              <label className="absolute left-0 text-gray-600 transition-all duration-300 
                peer-focus:text-black peer-focus:text-sm peer-focus:-top-2
                peer-valid:text-sm peer-valid:-top-2
                top-4">
                Project Description
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-white py-4 rounded-full shadow-md hover:bg-gray-100 transition font-medium"
            >
              Send Now!
            </button>
          </form>
        </div>

        {/* ---------------- RIGHT : IMAGE ---------------- */}
        <div className="flex justify-center items-start">
          <img
            src="https://images.unsplash.com/photo-1616004655120-12420784e7c2?auto=format&fit=crop&w=900&q=80"
            alt="contact visual"
            className="rounded-3xl w-full max-h-[650px] object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
