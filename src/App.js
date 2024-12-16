import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import UpdateStudentModal from "./components/UpdateStudent/index";
import Header from "./components/Header"; // Add Header component
import Footer from "./components/Footer"; // Add Footer component
import AboutUs from "./components/AboutUs"; // Add About Us page
import ContactUs from "./components/ContactUs"; // Add Contact Us page
import SwiperComponent from "./components/Swiper";
import AuthPage from "./components/AuthPage";
import HelpDesk from "./components/HelpDesk";
import{ Provider } from "react-redux";
import { pageStore } from "./utils/store";

const App = () => {
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem("students");
    return storedStudents ? JSON.parse(storedStudents) : [];
  });

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => setStudents([...students, student]);

  const deleteStudent = (id) =>
    setStudents(students.filter((student) => student.id !== id));

  const openUpdateModal = (student) => {
    setCurrentStudent(student);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setCurrentStudent(null);
  };

  const updateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    closeUpdateModal();
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "students") {
        const updatedStudents = JSON.parse(event.newValue || "[]");
        setStudents(updatedStudents);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Provider store={pageStore}>
      <div className="">
        <Router>
          <Header />
          <div className="container mx-auto px-24 py-6 bg-gray-100">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SwiperComponent />
                    <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
                      Student Score Management
                    </h1>
                    <StudentForm addStudent={addStudent} />
                  </>
                }
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/help-desk" element={<HelpDesk />} />

              <Route
                path="/student-details"
                element={
                  <>
                    <StudentTable
                      students={students}
                      deleteStudent={deleteStudent}
                      updateStudent={openUpdateModal}
                    />
                    {showUpdateModal && (
                      <UpdateStudentModal
                        student={currentStudent}
                        updateStudent={updateStudent}
                        closeModal={closeUpdateModal}
                      />
                    )}
                  </>
                }
              />
            </Routes>
          </div>
          <div className="mt-56">
            <Footer />
          </div>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
