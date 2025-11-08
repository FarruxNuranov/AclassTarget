import React from "react";
import HeadersAlt from "../components/HeadersAlt/HeadersAlt.jsx";
import TeacherAboutAlt from "../components/TeacherAboutAlt/TeacherAboutAlt.jsx";
import EducationHowAlt from "../components/EducationHowAlt/EducationHowAlt.jsx";
import ContactCTA from "../components/ContactCTA/ContactCTA.jsx";
import FeedbackSection from "../components/Feedback/FeedbackSection.jsx";

function HomeAlt() {
  return (
    <main>
      <HeadersAlt />
      <TeacherAboutAlt />
      <EducationHowAlt />
      <FeedbackSection />
      <ContactCTA />
    </main>
  );
}

export default HomeAlt;
