import React, { useState } from "react";

const HelpDesk = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const faqs = [
    {
      question: "How to access the library?",
      answer: "Visit the library portal on our website.",
    },
    {
      question: "How to reset my password?",
      answer: "Click on 'Forgot Password' on the login page.",
    },
    {
      question: "Where is the admin office?",
      answer: "It's located on the ground floor of the main building.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-6 text-red-600 p-4 rounded-lg">
        HelpDesk - Srinivas Institute of Technology
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-black rounded-lg focus:outline-none "
        />
      </div>

      {/* FAQs Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        {filteredFaqs.length ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>

      {/* Contact Information */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Email: helpdesk@srinivas.edu.in</li>
          <li>Phone: +91-1234567890</li>
          <li>Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</li>
        </ul>
      </div>

      {/* Ticket Submission Form */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Submit a Support Ticket</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-black rounded-lg focus:outline-none "
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-black rounded-lg focus:outline-none "
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border border-black rounded-lg focus:outline-none "
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 w-24 text-white py-2 px-4 rounded-lg hover:bg-red-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpDesk;
