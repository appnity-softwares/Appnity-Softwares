import React from "react";

const Privacy = () => {
  return (
    <div className="bg-[#dbdbdb] text-[#121212]">
      <main className="mx-auto max-w-9xl px-4 py-10 sm:px-6 sm:py-12 md:px-12 md:py-20 lg:px-40">
        {/* Heading */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Information We Collect
          </h1>
        </header>

        {/* Intro paragraph */}
        <section className="mb-6">
          <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
            We are committed to collecting only the information that genuinely helps us improve your overall experience with our services.
            The data we gather allows us to communicate effectively, understand your project requirements,
            enhance platform performance, and ensure a safe browsing environment.
            The information comes either directly from you or automatically through standard web technologies.
          </p>
        </section>

        {/* Bullet Points */}
        <section className="mb-8">
          <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700 pl-4">
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Basic contact info (name, email, phone) when you reach out</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Project-related details that you share with us during discussions, planning, or collaboration</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Website usage data (cookies, IP address, browser type) for analytics</span>
            </li>
          </ul>
        </section>

        <p className="mt-6 text-sm sm:text-base md:text-lg font-medium">Last Updated: 30th May 2025</p>

        {/* Sections: Use consistent responsive headings and paragraphs */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-6 mb-3">How We Use Your Information</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            The information we collect is used strictly to improve your experience with our agency. We use your contact details to respond to inquiries, follow up on project discussions, share proposals or invoices, and deliver services effectively.
            Internally, we may analyze anonymized user behavior to enhance our website’s performance and usability. You won’t receive marketing emails from us unless you explicitly opt in, and we never sell or trade your personal information to outside parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-8 mb-3">Cookies Technologies</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            The information we collect is used strictly to improve your experience with our agency. We use your contact details to respond to inquiries, follow up on project discussions, share proposals or invoices, and deliver services effectively.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-8 mb-3">Third-Party Services</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            The information we collect is used strictly to improve your experience with our agency. We use your contact details to respond to inquiries, follow up on project discussions, share proposals or invoices, and deliver services effectively.
          </p>

          <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700 pl-4">
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Basic contact info (name, email, phone) when you reach out</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Project details you share during collaboration</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Website usage data (cookies, IP address, browser type) for analytics</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-8 mb-3">Your Rights</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Your data belongs to you, and you have full control over it. If you’d like to review the personal information we have on file, correct outdated or inaccurate details, or request deletions of your data, just reach out to us. You also have the rights to withdraw any consent or opt out of communications at any time.
          </p>
        </section>

        <footer className="mt-6">
          <p className="text-base sm:text-lg md:text-xl text-black mt-5">
            Just drop us an email at <span className="font-medium">contact@appnity.com</span> — we're here to help.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Privacy;
