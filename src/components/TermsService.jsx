import React from "react";

const TermsService = () => {
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
            We provide a range of creative services, which may include but are not limited to branding, logo design, web design, strategy, digital assets and consultation. The exact scopes, deliverables, and timeline of each project will be clearly outlined in a project proposal, estimates, or agreement before any work begins.
          </p>
        </section>

        {/* Bullet Points */}
        <section className="mb-8">
          <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700 pl-4">
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Brand identity and logo design</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Web design and development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>Print and packaging</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-0.5 text-black">→</span>
              <span>design Social media content creation</span>
            </li>

          </ul>
        </section>

        <p className="mt-6 text-sm sm:text-base md:text-lg font-medium">Last Updated: 30th May 2025</p>

        {/* Sections: Use consistent responsive headings and paragraphs */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-6 mb-3">Payments and Invoicing</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            The information we collect is used strictly to improve your experience with our agency. We use your contact details to respond to inquiries, follow up on project discussions, share proposals or invoices, and deliver services effectively.
            Internally, we may analyze anonymized user behavior to enhance our website’s performance and usability. You won’t receive marketing emails from us unless you explicitly opt in, and we never sell or trade your personal information to outside parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-8 mb-3">Cancellation and Termination</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            The information we collect is used strictly to improve your experience with our agency. We use your contact details to respond to inquiries, follow up on project discussions, share proposals or invoices, and deliver services effectively.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-8 mb-3">Confidentiality</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            We understand that during a project, you may share private business information, creative ideas, or strategic materials with us. We treat all such information as confidential and will never disclose it to third parties without your consent. Likewise, we expect you to respect our creative processes and internal methods. If needed, we are happy to sign a mutual Non-Disclosure Agreement (NDA) to protect sensitive project information and maintain a trustworthy working relationship.

          </p>


        </section>

        <section>
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl mt-8 mb-3">Let’s Stay Connected</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            We believe in open communication and mutual respect. If you have any questions, concerns or need further clarification about these terms don’t hesitate to reach out to us at [franklin@agero.com]. We’re always happy to provide clarity and ensure you feel comfortable and be confident when working with us.          </p>
        </section>

      </main>
    </div>
  );
};

export default TermsService;
