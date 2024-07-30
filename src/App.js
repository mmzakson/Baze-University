import React from "react";
import Header from "./Home/Header";
import Faculty from "./Home/Faculty";
import Footer from "./Home/Footer";
import Program from "./Home/Program";
import Testimonial from "./Home/Testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import iconPaper from "../src/assets/icon-paper.svg";
import engineering from "../src/assets/Rectangle 8.png";
import socialSciences from "../src/assets/ss.png";
import environmentalSciences from "../src/assets/es.png";
import law from "../src/assets/law.png";
import ms from "../src/assets/ms.png";
import computing from "../src/assets/computing.png";
import postGrad from "../src/assets/postGrad.png";
import interStud from "../src/assets/interStud.png";
import admissionIcon1 from "../src/assets/admissionIcon1.svg";
import admissionIcon2 from "../src/assets/admissionIcon2.svg";
import admissionIcon3 from "../src/assets/admissionIcon3.svg";
import testimonial from "../src/assets/testimonial.png";
import circlerighticon from "../src/assets/circlerighticon.svg";
import envelope from "../src/assets/envelope.svg";
import phone from "../src/assets/phone.svg";
import faqPlus from "../src/assets/faqPlus.svg";
import chevronCircle from "../src/assets/chevronCirlce.svg";
import bazeLogo from "../src/assets/bazeLogo.png";
import summit from "../src/assets/summit.png";
import events from "../src/assets/events.png";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div class="flex items-center justify-center h-[44px] left-0 top-[85px] custom-gray text-center text-white font-semibold">
        Admission for the September 2024 academic session is ongoing.{" "}
        <span className="underline">Apply Now!</span>
      </div>

      <main>
        <section className="bg-gray-100 p-8 hero">
          <div className="container h-full text-white">
            <div className="h-full flex flex-col justify-center pl-8">
              <p className="baze-title">BAZE UNIVERSITY ABUJA</p>
              <h2 className="get-degree my-8">
                Get a Degree with Baze University
              </h2>
              <p className="deliver-quality ">
                Baze University delivers quality by having experienced
                International staff, superb teaching equipment, overseas{" "}
              </p>
              <div className="flex mt-8">
                <button className="btn-apply mr-4">Apply Now</button>
                <button className="btn-view-courses">View Courses</button>
              </div>
            </div>
          </div>
        </section>
        <section className="my-20">
          <div className="admissions justify-center">



            <div className="flex flex-col justify-between admission-item">
              <div className="">
                <div className="m-[0_0_0.7rem_1.3rem] inline-block break-words font-['Capitolium','Roboto_Condensed'] font-normal text-[1.9rem] text-[#1A1A1A]">
                  Pre Degree Admission
                </div>
                <div>
                <ul className="m-[0_0_0.7rem_1.3rem] inline-block list-disc list">
                  <li>Fill the online Application Form</li>
                  <li>Await a confirmation email of approval</li>
                </ul>
                </div>
              </div>
              <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
              <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
              </div>
            </div>

            <div className="flex flex-col justify-between admission-item">
              <div className="">
                <div className="m-[0_0_0.7rem_1.3rem] inline-block break-words font-['Capitolium','Roboto_Condensed'] font-normal text-[1.9rem] text-[#1A1A1A]">
                 Undergraduate Admission
                </div>
                <div>
                <ul className="m-[0_0_0.7rem_1.3rem] inline-block list-disc list">
                  <li>Obtain JAMB Form and meet the cut-off point</li>
                  <li>Must have at least 5 credit in O&apos;level (WAEC/NECO/NABTEB)</li>
                </ul>
                </div>
              </div>
              <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
              <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
              </div>
            </div>


            <div className="flex flex-col justify-between admission-item">
              <div className="">
                <div className="m-[0_0_0.7rem_1.3rem] inline-block break-words font-['Capitolium','Roboto_Condensed'] font-normal text-[1.9rem] text-[#1A1A1A]">
                Postgraduate Admission
                </div>
                <div>
                <ul className="m-[0_0_0.7rem_1.3rem] inline-block list-disc list">
                  <li>Fill the online Application Form</li>
                  <li>Await a confirmation email of approval</li>
                </ul>
                </div>
              </div>
              <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
              <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
              </div>
            </div>





          </div>
        </section>

        <section className="flex w-5/6 mx-auto discover mb-8">
          <div className="discover-bg mr-8"></div>
          <div className="discover-text">
            <div className="m-[0_0_1.9rem_0] flex flex-col w-[fit-content] box-sizing-border">
              <div className="m-[0_0_0.3rem_0] flex flex-col self-start w-[fit-content] box-sizing-border">
                <div className="discover-heading">DISCOVER BAZE UNIVERSITY</div>
                <span className="standout">Why we Stand Out</span>
              </div>
              <span className="discover-subtext">
                Baze University delivers quality by having experienced
                International staff, superb teaching equipment, overseas
                external examiners, and first-rate buildings to guarantee
                standards.
                <br />
                <br />
                Baze aims to provide university education to International
                standards in Nigeria at about half the cost of sending a student
                to study abroad.
              </span>
            </div>
            <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="btn-readmore mr-5">
                <button className="">Read more</button>
              </div>
              <div className="btn-brochure">
                <button className="">Brochure</button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-5/6 mx-auto discover extra-margin">
          <div className="flex flex-col discover-text">
            <div className="m-[0_0_1.9rem_0] flex flex-col w-[fit-content] box-sizing-border">
              <div className="m-[0_0_0.3rem_0] flex flex-col self-start w-[fit-content] box-sizing-border">
                <div className="discover-heading">BAZE UNIVERSITY</div>
                <span className="standout">Pro-Chancellor</span>
              </div>
              <div className="flex flex-col">
                <span className="discover-subtext">
                  Our university offers a comprehensive and dynamic curriculum
                  that integrates cutting-edge technology and modern teaching
                  methodologies. This approach ensures that students are not
                  only equipped with theoretical knowledge but also practical
                  skills that are essential in today&apos;s competitive job
                  market. The emphasis on tech-inclusive teaching makes Baze
                  University a hub for forward-thinking education, preparing
                  graduates to excel in various industries.
                  <br />
                  <br />
                  Our university offers a comprehensive and dynamic curriculum
                  that integrates cutting-edge technology and modern teaching
                  methodologies. This approach ensures that students are not
                  only equipped with theoretical knowledge but also practical
                  skills that are essential in today&apos;s competitive job
                  market. The emphasis on tech-inclusive teaching makes Baze
                  University a hub for forward-thinking education, preparing
                  graduates to excel in various industries.
                </span>

                <span className="datti-name">Sen. Baba Ahmed-Datti</span>
              </div>
            </div>
          </div>
          <div className="datti-bg mr-8"></div>
        </section>
        <hr />

        {/* Programs Start */}
        <section className="w-5/6 mx-auto extra-margin">
          <p className="programs-title mb-4">OUR PROGRAMMES</p>
          <p className="faculties-title">Baze Faculties</p>
          <div class="flex flex-wrap gap-4 p-4 my-8">
            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={engineering}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">10 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">Faculty of Engineering</p>
                  <p className="faculty-description mb-3">
                    Offers innovative programs in various engineering
                    disciplines, equipping students with the practical skills
                    and theoretical knowledge needed to excel in the engineering
                    field
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box start */}

            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={socialSciences}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">5 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">
                    Faculty of Management and Social sciences
                  </p>
                  <p className="faculty-description mb-3">
                    Provides comprehensive education in business, economics,
                    sociology, and related fields, preparing students for
                    leadership roles in various industries and societal sectors.
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box start */}

            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={environmentalSciences}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">8 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">
                    Faculty of Environmental Sciences
                  </p>
                  <p className="faculty-description mb-3">
                    Focuses on sustainable development and environmental
                    protection through multidisciplinary education and research,
                    addressing global environmental challenges
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box end */}

            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={law}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">3 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">Faculty of Law</p>
                  <p className="faculty-description mb-3">
                    Prepares students for legal practice with a robust
                    curriculum covering various areas of law, fostering critical
                    thinking and ethical practice.
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box end */}

            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={ms}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">9 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">
                    Faculty of Basic Medical Sciences
                  </p>
                  <p className="faculty-description mb-3">
                    Delivers foundational medical education and training,
                    emphasizing the fundamental sciences essential for advanced
                    medical studies and healthcare professions.
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box end */}

            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={computing}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">15 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">
                    Faculty of Computing and Applied Sciences
                  </p>
                  <p className="faculty-description mb-3">
                    Combines rigorous training in computer science and applied
                    sciences, fostering innovation and technological advancement
                    across multiple industries.
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box end */}

            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={postGrad}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">13 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">Postgraduate School</p>
                  <p className="faculty-description mb-3">
                    Offers advanced degrees and research opportunities across
                    disciplines, promoting academic excellence and professional
                    development at the graduate level.
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box end */}

            {/* Faculty box start */}
            <div class="w-[373px]">
              <div className="w-full faculty-box flex flex-col">
                <div className="faculty-img">
                  <img
                    src={interStud}
                    alt="Baze University Logo"
                    className="faculty-img"
                  />
                </div>
                <div className="flefaculty-info w-full px-4 py-6">
                  <div className="flex justify-between programs-count ">
                    <img
                      src={iconPaper}
                      alt="Baze University Logo"
                      className=""
                    />
                    <span className="count ">13 Programmes</span>
                  </div>
                  <p className="faculty-name my-6">
                    Center for Foundation and Interdisciplinary Studies
                  </p>
                  <p className="faculty-description mb-3">
                    Provides foundational courses and interdisciplinary
                    programs, supporting students &apos; transition to higher
                    education and promoting a well-rounded academic experience
                  </p>
                  <p className="flex apply-now">
                    Apply Now <img
                      src={chevronCircle}
                      alt="Baze University Logo"
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* Faculty box end */}

            <div class="w-[373px] h-32 bg-pink-500"></div>
          </div>
        </section>
        {/* Programs End */}

        {/* Admission Start */}
        <section className="flex w-5/6 mx-auto extra-margin admission">
          <div className="w-1/2 h-3/4">
            <p className="programs-title mb-4">HOW TO APPLY</p>
            <h2 className="font-normal text-[50px] leading-[55px] mb-10 text-[#1A1A1A]">
              Gain Admission into Baze University
            </h2>
            <div className="m-[0_0_0.2rem_0] flex flex-row w-[fit-content] box-sizing-border">
              <div className="flex justify-center items-center  rounded-[1.3rem] bg-[#999999] relative m-[0_1.3rem_6.5rem_0] flex p-[0.7rem_0.7rem_0.7rem_0.8rem] w-[2.6rem] h-[2.6rem] box-sizing-border">
                <div className="flex justify-center items-center w-[1.5rem] h-[1.5rem] box-sizing-border">
                  <img
                    src={admissionIcon1}
                    alt="Baze University Logo"
                    className=""
                  />
                </div>
              </div>
              <div className="flex flex-col box-sizing-border">
                <div className="m-[0_0_0.3rem_0] inline-block self-start break-words font-['Rethink_Sans'] font-bold text-[1.6rem] text-[#4D4D4D]">
                  Apply for a Programme
                </div>
                <span className="break-words font-['Rethink_Sans'] font-normal text-[1.1rem] leading-[1.5] text-[#4D4D4D]">
                  Visit the admission portal at
                  portal.bazeuniversity.edu.ng/admission/, create an account and
                  Submit your application requirements depending on your course
                  of study.
                </span>
              </div>
            </div>
            <div className="m-[0_0.5rem_1.9rem_0] flex flex-row w-[fit-content] box-sizing-border">
              <div className="flex justify-center items-center rounded-[1.3rem] bg-[#999999] relative m-[0_1.3rem_3.1rem_0] flex p-[0.8rem_0.7rem_0.8rem_0.6rem] w-[2.6rem] h-[2.6rem] box-sizing-border">
                <div className="flex justify-center items-center w-[1.5rem] h-[1.5rem] box-sizing-border">
                  <img
                    src={admissionIcon2}
                    alt="Baze University Logo"
                    className=""
                  />
                </div>
              </div>
              <div className="m-[0_0rem_0_0] flex flex-col box-sizing-border">
                <div className="m-[0_0_0.3rem_0] inline-block self-start break-words font-['Rethink_Sans'] font-bold text-[1.6rem] text-[#4D4D4D]">
                  Gain Admission
                </div>
                <span className="break-words font-['Rethink_Sans'] font-normal text-[1.1rem] leading-[1.5] text-[#4D4D4D]">
                  Wait for Admission approval. Note: it will be sent via your
                  application e-mail
                </span>
              </div>
            </div>
            <div className="m-[0_0.5rem_1.9rem_0] flex flex-row w-[fit-content] box-sizing-border">
              <div className=" flex justify-center items-center rounded-[1.3rem] bg-[#999999] relative m-[0_1.3rem_3.1rem_0] flex p-[0.8rem_0.7rem_0.8rem_0.6rem] w-[2.6rem] h-[2.6rem] box-sizing-border">
                <div className="flex w-[1.5rem] h-[1.5rem] box-sizing-border">
                  <img
                    src={admissionIcon3}
                    alt="Baze University Logo"
                    className=""
                  />
                </div>
              </div>
              <div className="m-[0_0rem_0_0] flex flex-col box-sizing-border">
                <div className="m-[0_0_0.3rem_0] inline-block self-start break-words font-['Rethink_Sans'] font-bold text-[1.6rem] text-[#4D4D4D]">
                  Resume Semester
                </div>
                <span className="break-words font-['Rethink_Sans'] font-normal text-[1.1rem] leading-[1.5] text-[#4D4D4D]">
                  Proceed to the Registry for collection of admission letter and
                  registration
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Admission End */}

        {/* Testimonials Start */}

        <section className="student-alumni-section">
          <div className="text-center mb-12">
            <p className="testim-title">TESTIMONIALS</p>
            <p className="stud-alumni">Student and Alumni Stories</p>
          </div>
          <div className="flex justify-around alumni-rl">
            <div className="alumni-let">
              <img
                src={testimonial}
                alt="Baze University Logo"
                className="flex-shrink-0 w-auto h-auto"
              />
            </div>
            <div className="flex flex-col alumni-right">
              <p className="text-center">
                My experience at Baze university introduced me to so many new
                concepts that changed my view of education and the world at
                large. The depth and detail of what I learned are far beyond my
                day-to-day experiences. I am proud to say I went through Baze
                University. - Rabi Bello Mohammed, Trade and Exchange Department
                (TED) at Central Bank of Nigeria (CBN)
              </p>
              <div className="alumni-author">
                <div className="pic"></div>
                <div className="info">
                  <p className="name"></p>
                  <p className="desc"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials End */}

        {/* Calender Section Start */}
        <section className=" mx-auto">
          <div className="section-header text-center mb-15">
            <p className="section-title">BAZE UNIVERSITY</p>
            <p className="section-name">Academic Calendar</p>
            <p className="section-desc">
              The University Runs 2 Semesters And 1 Summer Session
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4 my-8 section-body ">
            <div className="w-[580px] py-6 pl-8 calender">
              <p className="calender-title">Semester 23C</p>
              <p className="calender-info my-2">
                Candidates are advised to apply for admission for their
                respective courses before the close of the admission session.
              </p>
              <p className="calender-dates">
                Application Deadline: 03 January, 2023
              </p>
              <p className="calender-dates">
                Semester Start Date: 05 September, 2022
              </p>
            </div>
            <div className="w-[580px] py-6 pl-8 calender">
              <p className="calender-title">Semester 24A</p>
              <p className="calender-info my-2">
                Candidates are advised to apply for admission for their
                respective courses before the close of the admission session.
              </p>
              <p className="calender-dates">
                Application Deadline: 03 January, 2023
              </p>
              <p className="calender-dates">
                Semester Start Date: 05 September, 2022
              </p>
            </div>
            <div className="w-[580px] py-6 pl-8 calender">
              <p className="calender-title">Semester 23C</p>
              <p className="calender-info my-2">
                Candidates are advised to apply for admission for their
                respective courses before the close of the admission session.
              </p>
              <p className="calender-dates">
                Application Deadline: 03 January, 2023
              </p>
              <p className="calender-dates">
                Semester Start Date: 05 September, 2022
              </p>
            </div>
            <div className="w-[580px] py-6 pl-8 calender">
              <p className="calender-title">Semester 23C</p>
              <p className="calender-info my-2">
                Candidates are advised to apply for admission for their
                respective courses before the close of the admission session.
              </p>
              <p className="calender-dates">
                Application Deadline: 03 January, 2023
              </p>
              <p className="calender-dates">
                Semester Start Date: 05 September, 2022
              </p>
            </div>
          </div>
        </section>
        {/* Calender Section End */}

        <hr />

        <section className=" mx-auto my-10 ">
          <div className="section-header text-center mb-15">
            <p className="section-name">Events</p>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-10 mb-20 section-body ">
            <div className="w-[580px]">
              <div className="w-full relative events-img mb-8">
                <span className="flex justify-center text-white items-center date-badge text-center">
                  JUNE, 2024
                </span>
              </div>
              <div className="event-date">
                <p className="event-title mb-4">
                  3RD BAZE UNIVERSITY PROFESSORIAL INAUGURAL LECTURE
                </p>
                <p className="event-time">
                  3:30PM &ndash; 5:00PM | BAZE UNIVERSITY ABUJA
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between w-[580px] ">
              <div className="flex justify-between">
                <div className="w-1/2 relative future-img mb-8">
                  <span className="flex justify-center text-white items-center date-badge-sm text-center">
                    JUNE, 2024
                  </span>
                </div>
                <div className="w-1/2 p-5 event-date">
                  <p className="event-title-sm mb-4">FUTURE AFRICA SUMMIT</p>
                  <p className="event-time">
                    3:30PM &ndash; 5:00PM | BAZE UNIVERSITY ABUJA
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2 relative educators-img mb-8">
                  <span className="flex justify-center text-white items-center date-badge-sm text-center">
                    JUNE, 2024
                  </span>
                </div>
                <div className="w-1/2 p-5 event-date">
                  <p className="event-title-sm mb-4">
                    ABUJA EDUCATORS CONFERENCE (CEBAR)
                  </p>
                  <p className="event-time">
                    3:30PM &ndash; 5:00PM | BAZE UNIVERSITY ABUJA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center view-more my-16">
            <button className="flex justify-center items-center view-btn">
              View more Events
            </button>
          </div>
          <hr className="my-16" />
        </section>

        <section className="w-5/6 baze-news mx-auto">
          <div className="section-header text-center mb-15">
            <p className="section-name">Baze News</p>
          </div>
          <div className="news-body my-16">
            <div class="flex flex-wrap gap-4 p-4 my-8">
              {/* News box start */}
              <div class="w-[373px] h-[346px] news-box">
                <div className="w-full box-img bg-no-repeat bg-cover box-1"></div>
                <div className="flex flex-col justify-around items-center box-text text-center px-5">
                  <p className="box-text-title">BAZE UNIVERSITY</p>
                  <p className="box-text-desc">
                    3rd Baze University Professorial Inaugural Lecture
                  </p>
                  <span className="summary flex items-center">
                    Read More
                    <span className="ml-1">
                      <img
                        src={circlerighticon}
                        alt="Baze University Logo"
                        className=""
                      />
                    </span>
                  </span>
                </div>
              </div>
              {/* News box end */}

              {/* News box start */}
              <div class="w-[373px] h-[346px] news-box">
                <div className="w-full box-img bg-no-repeat bg-contain box-2"></div>
                <div className="flex flex-col justify-around items-center box-text text-center px-5">
                  <p className="box-text-title">BAZE UNIVERSITY</p>
                  <p className="box-text-desc">
                    Baze Students Attend A Democracy Summit
                  </p>
                  <span className="summary flex items-center">
                    Read More
                    <span className="ml-1">
                      <img
                        src={circlerighticon}
                        alt="Baze University Logo"
                        className=""
                      />
                    </span>
                  </span>
                </div>
              </div>
              {/* News box end */}

              {/* News box start */}
              <div class="w-[373px] h-[346px] news-box">
                <div className="w-full box-img bg-no-repeat bg-contain box-3"></div>
                <div className="flex flex-col justify-around items-center box-text text-center px-5">
                  <p className="box-text-title">BAZE UNIVERSITY</p>
                  <p className="box-text-desc">
                    15th Matriculation Ceremony of Baze University
                  </p>
                  <span className="summary flex items-center">
                    Read More
                    <span className="ml-1">
                      <img
                        src={circlerighticon}
                        alt="Baze University Logo"
                        className=""
                      />
                    </span>
                  </span>
                </div>
              </div>
              {/* News box end */}
            </div>
            <div className="w-full my-16">
              <div className="flex justify-around mx-auto text-center dots">
                <span className="dot-light inline-block rounded-full"></span>
                <span className="dot-dark inline-block rounded-full"></span>
                <span className="dot-light inline-block rounded-full"></span>
                <span className="dot-dark inline-block rounded-full"></span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq bg-[#F8F8F8] min-h-[577px]">
          <div className="flex justify-center pt-20 w-5/6 min-h-[392px] mx-auto">
            <div className="w-1/2">
              <div className="w-4/5 faq-header mb-15">
                <p className="faq-title">FAQ</p>
                <p className="faq-name my-4">Frequently Asked Questions</p>
                <p className="faq-desc">
                  Here&apos;s common frequently asked questions about Baze
                  University
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-between items-center question-box p-2 border-b-2 mb-8">
                <p className="question">
                  What are the requirements to study at Baze University
                </p>
                <span className="inline-block icon">
                  <img src={faqPlus} alt="Baze University Logo" className="" />
                </span>
              </div>
              <div className="flex justify-between items-center question-box p-2 border-b-2 mb-8">
                <p className="question">
                  What are the requirements to study at Baze University
                </p>
                <span className="inline-block icon">
                  <img src={faqPlus} alt="Baze University Logo" className="" />
                </span>
              </div>
              <div className="flex justify-between items-center question-box p-2 border-b-2 mb-8">
                <p className="question">
                  What are the requirements to study at Baze University
                </p>
                <span className="inline-block icon">
                  <img src={faqPlus} alt="Baze University Logo" className="" />
                </span>
              </div>
              <div className="flex justify-between items-center question-box p-2 border-b-2 mb-8">
                <p className="question">
                  What are the requirements to study at Baze University
                </p>
                <span className="inline-block icon">
                  <img src={faqPlus} alt="Baze University Logo" className="" />
                </span>
              </div>
              <div className="flex justify-between items-center question-box p-2 border-b-2 mb-8">
                <p className="question">
                  What are the requirements to study at Baze University
                </p>
                <span className="inline-block icon">
                  <img src={faqPlus} alt="Baze University Logo" className="" />
                </span>
              </div>
              <div className="flex justify-between items-center question-box p-2 border-b-2 mb-8">
                <p className="question">
                  What are the requirements to study at Baze University
                </p>
                <span className="inline-block icon">
                  <img src={faqPlus} alt="Baze University Logo" className="" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-beteen w-5/6 mx-auto min-h-[500px]">
            <div className="flex flex-col grow w-1/2 h-[364px]">
              <div className="grow-0 mb-4">
                <img
                  src={bazeLogo}
                  alt="Baze University Logo"
                  className="inline-block grow-0 logo3"
                />
              </div>
              <p className="baze-address mb-10">
                Baze University, Abuja
                <br />
                Plot 686 Cadastral Zone C00
                <br />
                Behind National Judicial Institute, Kuchigoro
                <br />
                Jabi, Abuja
              </p>

              <div className="flex flex-col justify-around w-[278px] h-[76px] contact">
                <div className="flex contact-item">
                  <img
                    src={envelope}
                    alt="Baze University Logo"
                    className="inline-block grow-0 mr-4 logo3"
                  />
                  info@bazeuniversity.edu.ng
                </div>
                <div className="flex contact-item">
                  <img
                    src={phone}
                    alt="Baze University Logo"
                    className="inline-block grow-0 mr-4 logo3"
                  />
                  +234 9053374375
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between grow-0 w-1/2 h-[364px]">
              <p className="quick-links">Quick Links</p>
              <p className="quick-links-item">About Baze</p>
              <p className="quick-links-item">Our Campus</p>
              <p className="quick-links-item">Events</p>
              <p className="quick-links-item">News</p>
              <p className="quick-links-item">Career</p>
            </div>

            <div className="flex flex-col justify-between grow-0 w-1/2 h-[364px]">
              <p className="quick-links">Resources</p>
              <p className="quick-links-item">Baze Panaroma</p>
              <p className="quick-links-item">Publications</p>
              <p className="quick-links-item">Baze Brochure</p>
              <p className="quick-links-item">ITR & Newsletter</p>
            </div>

            <div className="flex flex-col justify-between grow-0 w-1/2 h-[364px]">
              <p className="quick-links">Directorate &amp; Units</p>
              <p className="quick-links-item">IT, Research and Innovation Office</p>
              <p className="quick-links-item">Directorate of Strategy &amp; Special Duties</p>
              <p className="quick-links-item">Directorate of Security Services</p>
              <p className="quick-links-item">Directorate of Security Services</p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
