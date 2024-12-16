import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        {
          name: "Admission Open",
          href: "https://www.sitmng.ac.in/SIT/Academics/Admission",
        },
        {
          name: "Courses Offered",
          href: "https://www.sitmng.ac.in/SIT/Academics/Courses-Offered",
        },
        {
          name: "Placements",
          href: "https://www.sitmng.ac.in/SIT/Placement/About-Placement",
        },
      ],
    },
    {
      title: "Student Support",
      links: [
        {
          name: "Anti Ragging",
          href: "https://www.sitmng.ac.in/SIT/More/AntiRagging",
        },
        {
          name: "ICC",
          href: "https://www.sitmng.ac.in/SIT/MORE/Internal-Complaints-Committee(ICC)",
        },
        {
          name: "Grievance Redressal Cell",
          href: "https://www.sitmng.ac.in/SIT/More/Grievance",
        },
      ],
    },
    {
      title: "Alumni & Contact",
      links: [
        { name: "Alumni", href: "https://alumni.sitmng.ac.in/" },
        {
          name: "Grievance Portal",
          href: "https://www.sitmng.ac.in/SIT/More/GrievancePortal",
        },
        {
          name: "Contact Us",
          href: "https://www.sitmng.ac.in/Contact-Us/Contacts",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-8  w-full">
      <div className="flex justify-center flex-col px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4  items-end justify-center">
          {footerSections.map((section, index) => (
            <div className="" key={index}>
              <h4 className="font-bold text-base">{section.title}</h4>
              <ul className="mt-2 space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:underline text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Srinivas Institute of Technology,
            Mangalore. All rights reserved.
          </p>
          <p>Powered by Student Score Card Management System</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
