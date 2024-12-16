import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [subjects, setSubjects] = useState([{ subject: "", score: "" }]);
  const [parentEmail, setParentEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  // Validation function to check all fields
  const validateForm = () => {
    const newErrors = {};

    // Check if student name is provided
    if (!name) newErrors.name = "Student name is required.";

    // Check if subject and score are provided for each subject
    subjects.forEach((subject, index) => {
      if (!subject.subject) {
        newErrors[`subject-${index}`] = "Subject name is required.";
      }
      if (!subject.score) {
        newErrors[`score-${index}`] = "Subject score is required.";
      }
    });

    // Check if parent email is provided (optional but can be validated if needed)
    if (parentEmail && !/\S+@\S+\.\S+/.test(parentEmail)) {
      newErrors.parentEmail = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (validateForm()) {
      const student = {
        id: Date.now(),
        name,
        subjects,
        parentEmail,
      };
      addStudent(student);
      setName("");
      setSubjects([{ subject: "", score: "" }]);
      setParentEmail("");
      setErrors({});

      // Redirect to the student details page only if the form is valid
      navigate("/student-details");
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Add New Student
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Student Name Input */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Student Name"
              className="p-3 w-full rounded-md border border-gray-300 "
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>

          {/* Subjects Inputs */}
          {subjects.map((subject, index) => (
            <div key={index} className="grid relative grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                {" "}
                <input
                  type="text"
                  value={subject.subject}
                  onChange={(e) =>
                    handleSubjectChange(index, "subject", e.target.value)
                  }
                  placeholder="Subject"
                  className="p-3 rounded-md border border-gray-300 "
                />
                {errors[`subject-${index}`] && (
                  <p className="text-red-600 ">{errors[`subject-${index}`]}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="number"
                  value={subject.score}
                  onChange={(e) =>
                    handleSubjectChange(index, "score", e.target.value)
                  }
                  placeholder="Score"
                  className="p-3 rounded-md border border-gray-300 "
                />
                {errors[`score-${index}`] && (
                  <p className="text-red-600 ">{errors[`score-${index}`]}</p>
                )}
              </div>

              {/* Close button to remove subject */}
              {subjects.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveSubject(index)}
                  className="rounded-full text-xs flex justify-center items-center absolute -right-7 top-3.5 bg-red-600 text-white w-6 h-6 hover:bg-red-700 focus:outline-none"
                >
                  X
                </button>
              )}
            </div>
          ))}

          {/* Add Subject Button */}
          <button
            type="button"
            onClick={handleAddSubject}
            className="p-2 bg-red-600 text-white rounded-md transition-colors hover:bg-red-700 focus:outline-none"
          >
            Add Subject
          </button>

          {/* Parent Email Input */}

          <div className="flex  items-center gap-4">
            <div className="flex flex-col gap-1 w-full">
              <input
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                placeholder="Parent's Email (optional)"
                className="p-3 flex-1 rounded-md border border-gray-300 "
              />
              {errors.parentEmail && (
                <p className="text-red-600 ">{errors.parentEmail}</p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-40 p-3 bg-black text-white rounded-md transition-colors hover:bg-gray-800 focus:outline-none"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center w-full h-full">
        <img
          src="https://www.sitmng.ac.in/assets/img/infrastructure/img/college.jpg"
          alt="Srinivas Institute"
          className="w-full h-auto max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default StudentForm;
