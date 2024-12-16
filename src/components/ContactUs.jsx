import React from "react";

const ContactUs = () => {
  return (
    <main className="container mx-auto px-4 py-8 bg-black text-white shadow-lg rounded-md">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          Contact Us
        </h1>
        <p className="text-lg">
          We’re here to assist you with any inquiries or support.
        </p>
      </header>

      {/* Contact Details */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Get in Touch</h2>
        <address className="not-italic text-lg leading-7">
          Srinivas Institute of Technology,
          <br />
          Valachil, Mangalore - 574143, Karnataka, India.
        </address>
        <p className="mt-4">
          <strong>Phone:</strong> +91-824-2274730
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@srinivasgroup.com"
            className="text-red-500 hover:underline"
          >
            info@srinivasgroup.com
          </a>
        </p>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Send Us a Message
        </h2>
        <form className="bg-white p-6 rounded-md shadow-sm text-black">
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-40  bg-red-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
