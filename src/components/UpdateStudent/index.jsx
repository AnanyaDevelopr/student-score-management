import React, { useEffect, useState } from "react";

const UpdateStudentModal = ({ student, updateStudent, closeModal }) => {
  const [name, setName] = useState(student.name);
  const [subjects, setSubjects] = useState(student.subjects);
  const [parentEmail, setParentEmail] = useState(student.parentEmail);

  const handleSubjectChange = (index, key, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][key] = value;
    setSubjects(updatedSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subject: "", score: "" }]);
  };

  const handleRemoveSubject = (index) => {
    if (subjects.length > 1) {
      const updatedSubjects = subjects.filter((_, idx) => idx !== index);
      setSubjects(updatedSubjects);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent({
      ...student,
      name,
      subjects: subjects.map((s) => ({
        subject: s.subject,
        score: parseInt(s.score, 10),
      })),
      parentEmail,
    });
  };

  useEffect(() => {
    setName(student.name);
    setSubjects(student.subjects);
    setParentEmail(student.parentEmail);
  }, [student]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white relative w-[600px] p-8 rounded-md shadow-lg ">
        {/* Close Modal Button */}
        <button
          className="absolute top-1 right-2 text-red-500"
          onClick={closeModal}
        >
          Close
        </button>
        <h2 className="text-lg font-bold mb-4">Update Student</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Subject Inputs with Add/Remove functionality */}
          {subjects.map((subject, index) => (
            <div key={index} className="grid relative grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                value={subject.subject}
                onChange={(e) =>
                  handleSubjectChange(index, "subject", e.target.value)
                }
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={subject.score}
                onChange={(e) =>
                  handleSubjectChange(index, "score", e.target.value)
                }
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Close Button to Remove Subject (only if more than one subject) */}
              {subjects.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveSubject(index)}
                  className=" rounded-full text-xs flex justify-center items-center absolute -right-7 top-2 bg-red-600 text-white w-6 h-6 hover:bg-red-700 focus:outline-none"
                >
                  x
                </button>
              )}
            </div>
          ))}

          {/* Add Subject Button */}
          <button
            type="button"
            onClick={handleAddSubject}
            className="p-2 bg-red-600 text-white rounded-md transition-colors hover:bg-red-900 focus:outline-none mb-3"
          >
            Add Subject
          </button>

          {/* Parent Email Input */}
          <input
            type="email"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            placeholder="Parent's Email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-900 w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudentModal;
