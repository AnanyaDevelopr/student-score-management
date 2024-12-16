import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
 const slides = [
   {
     id: 1,
     title: "State-of-the-Art Campus",
     description:
       "Srinivas Institute of Technology (SIT) features a modern, well-equipped campus spread across lush greenery, offering advanced infrastructure including spacious classrooms, cutting-edge laboratories, and high-speed internet. The campus fosters a vibrant learning environment with recreational areas, seminar halls, and dedicated spaces for research and extracurricular activities.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/college.jpg",
   },
   {
     id: 2,
     title: "Diverse Programs",
     description:
       "SIT offers a wide range of programs in engineering, management, and applied sciences, including undergraduate, postgraduate, and doctoral degrees. Programs are designed to meet global standards, focusing on technical skills, critical thinking, and real-world problem-solving to prepare students for diverse career opportunities in the competitive job market.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/training_room.jpg",
   },
   {
     id: 3,
     title: "Experienced Faculty",
     description:
       "With a team of highly qualified and experienced faculty, SIT ensures quality education through a mix of traditional and modern teaching methods. Faculty members are committed to mentoring students, offering academic guidance, and encouraging innovative thinking, research initiatives, and entrepreneurial development, helping students excel in their chosen fields.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/library.jpg",
   },
   {
     id: 4,
     title: "Industry-Oriented Training",
     description:
       "SIT emphasizes industry-oriented education by partnering with leading organizations to provide internships, industrial visits, and live projects. Students benefit from hands-on experience, exposure to industry standards, and real-world challenges, helping them build essential skills required to meet industry demands and excel in their professional careers.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/practical.jpg",
   },
   {
     id: 5,
     title: "World-Class Library",
     description:
       "The SIT library is a hub of knowledge, featuring an extensive collection of academic books, research journals, e-books, and digital databases. With quiet study spaces, computer access, and research support, the library fosters self-learning, exploration, and academic excellence among students and faculty members alike.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/library.jpg",
   },
   {
     id: 6,
     title: "Innovation and Research",
     description:
       "SIT fosters a culture of innovation and research, encouraging students and faculty to engage in groundbreaking projects, publish research papers, and participate in technical competitions. With well-equipped R&D centers and collaborative opportunities, the institution supports technological advancements, innovation-driven learning, and entrepreneurial aspirations.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/training_room.jpg",
   },
   {
     id: 7,
     title: "Modern Labs and Workshops",
     description:
       "SIT provides access to state-of-the-art labs, workshops, and computing facilities designed for hands-on learning. Equipped with the latest tools, technologies, and software, these spaces enable students to experiment, explore, and apply theoretical concepts to practical scenarios, bridging the gap between learning and implementation.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/practical.jpg",
   },
   {
     id: 8,
     title: "Holistic Student Development",
     description:
       "At SIT, holistic student development is a priority, with programs designed to enhance academic, physical, and interpersonal skills. Through cultural events, sports activities, technical fests, and leadership training, the institution ensures students develop a well-rounded personality to succeed in both personal and professional life.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/college.jpg",
   },
   {
     id: 9,
     title: "Placement Assistance",
     description:
       "SIT’s dedicated training and placement cell works closely with top recruiters to provide students with placement opportunities. Through pre-placement training, mock interviews, and skill enhancement programs, the institution ensures students are equipped with the confidence and competence to secure placements in reputed national and international organizations.",
     image:
       "https://www.sitmng.ac.in/assets/img/infrastructure/img/training_room.jpg",
   },
 ];


  return (
    <div className="bg-gray-100 py-10 swiper-wrapper">
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
   pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        className="w-11/12 md:w-3/4 mx-auto rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="p-6 rounded-lg flex flex-col md:flex-row items-center border border-gray-300">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-6 text-center md:text-left">
                <h3 className="text-xl font-semibold text-red-600">
                  {slide.title}
                </h3>
                <p className="text-gray-700 mt-2">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
