import emailjs from "emailjs-com"; // Import EmailJS SDK
import React from "react";

const StudentTable = ({ students, deleteStudent, updateStudent }) => {
  const sendMail = async (student) => {
    const dynamicContent = student?.subjects
      .map((item) => `Subject: ${item.subject}\n  Score: ${item.score}`)
      .join("\n\n");

    const templateParams = {
      name: student.name,
      subjects: dynamicContent,
      parentEmail: student.parentEmail,
    };

    try {
      const response = await emailjs.send(
        "service_mcukfcw", // Your EmailJS service ID
        "template_b4pizv2", // Your EmailJS template ID
        templateParams,
        "IOEf-2SB82CKj5eyp" // Your EmailJS user ID
      );
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <>
      {students.length > 0 ? (
        <table className="w-full rounded-md border-collapse border border-gray-400 bg-white">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-3 border border-gray-500">Name</th>
              <th className="p-3 border border-gray-500">Subjects</th>
              <th className="p-3 border border-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-400 text-black">
                  {student.name}
                </td>

                {/* Subjects Table Column */}
                <td>
                  <div>
                    {student.subjects.map((subj, index) => (
                      <div
                        key={index}
                        className="border grid grid-cols-12 border-gray-300"
                      >
                        <p className="px-3 border col-span-6 border-gray-300 py-2">
                          {subj.subject}
                        </p>
                        <p className="px-3 border col-span-6 border-gray-300 py-2">
                          {subj.score}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* <table className="w-full border-collapse">
               
                <tbody>
                  {student.subjects.map((subj, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="px-3 border border-gray-300 py-2">
                        {subj.subject}
                      </td>
                      <td className="px-3 border border-gray-300 py-2">
                        {subj.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
                </td>

                {/* Actions Column */}
                <td className="p-3 border border-gray-400 space-x-2">
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                    onClick={() => updateStudent(student)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                  {student.parentEmail && (
                    <button
                      className="bg-white text-black border border-black px-3 py-1 rounded-md hover:bg-gray-100"
                      onClick={() => sendMail(student)}
                    >
                      Send Mail
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center justify-center h-36">
          {/* Show "Student details not added" message and image */}
          <p className="text-red-500 text-2xl font-bold">
            Student details not added
          </p>
          <p className="mt-4 text-sm text-gray-700">
            You can add or view student details on the{" "}
            <a href="/" className="underline">
              {" "}
              home page
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
};

export default StudentTable;
