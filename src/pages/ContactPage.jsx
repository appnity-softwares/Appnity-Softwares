import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputField from "../components/InputField";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
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

      // Google Apps Script returns a text/json response
      // Note: CORS might be an issue if not handled correctly in GAS, 
      // but usually 'no-cors' mode or simple POST works if GAS is set to 'Anyone'.
      // However, fetch to GAS often requires 'no-cors' if we don't want to deal with redirects,
      // but then we can't read the response.
      // A common workaround is using 'no-cors' and assuming success if no error thrown,
      // OR using a proxy, OR just standard fetch if GAS is deployed correctly.
      // Let's try standard fetch first. If it fails due to CORS, we might need 'no-cors'.

      // Actually, standard fetch to GAS 'exec' url usually follows redirects.

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", service: "", description: "" });
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback for CORS issues where we can't read response but it might have worked
      // or actual network error.
      // For GAS, often we use mode: 'no-cors' to avoid CORS errors, but then we can't check status.
      // Let's try a robust approach:

      // If the error is syntax error (unexpected token < in JSON), it might be an HTML error page.
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-200 py-20 px-6">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* ---------------- LEFT : FORM ---------------- */}
        <div>
          <p className="text-gray-600 mb-2">(Contact)</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-12">Get In Touch</h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            <InputField
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <InputField
              name="email"
              type="email"
              label="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <InputField
              name="service"
              type="select"
              label="What you need from us?"
              value={formData.service}
              onChange={handleChange}
              required
              options={[
                "UI/UX Design",
                "Website Development",
                "Branding",
                "Marketing Strategy",
              ]}
            />

            <InputField
              name="description"
              type="textarea"
              label="Project Description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white py-4 rounded-full shadow-md hover:bg-gray-100 transition font-medium disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Now!"}
            </button>
          </form>
        </div>

        {/* ---------------- RIGHT : IMAGE ---------------- */}
        <div className="flex justify-center items-start">
          <img
            src="https://images.unsplash.com/photo-1616004655120-12420784e7c2?auto=format&fit=crop&w=900&q=80"
            alt="contact visual"
            loading="lazy"
            className="rounded-3xl w-full max-h-[650px] object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
