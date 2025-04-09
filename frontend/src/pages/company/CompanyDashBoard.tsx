import cap from "../../assets/cap.png";
import bag from "../../assets/bag.png";
import student from "../../assets/cstudent.png";
import { useState } from "react";
import { MenuItem2 } from "../../types";
import studentimage from "../../assets/digant.jpg";

import { CompanyProfileCard } from "../../components/company/CompanyProfileCard";
import CompanyNavBar from "../../components/company/CompanyNavBar";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/company/dashboard" },
  { id: 1, title: "Stats", link: "/company/stats" },
  { id: 2, title: "Student Info", link: "/company/studentinfo" },
  { id: 3, title: "College Info", link: "/company/collegeinfo" },
  { id: 4, title: "Update Job", link: "/company/updatejob" },
  { id: 5, title: "Application", link: "/company/application" },
];

interface College {
  name: string;
  logo: string;
}

const colleges: College[] = [
  {
    name: "IIIT Dharwad",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Indian_Institute_of_Information_Technology%2C_Dharwad_Logo.svg",
  },
  {
    name: "IIT Bombay",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/IIT-bombay-Indian-Institute-of-Technology-Bombay.png",
  },

  {
    name: "IIT Madras",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
  },
  {
    name: "IIIT Hyderabad",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdrV9ri6hFdlyau7FPl6G76HXg3RJ9g2_vg&s",
  },
  {
    name: "NIT Trichy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/NIT_Trichy_logo.jpg",
  },
  {
    name: "IIIT Bangalore",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQUL21jPyWpXXvmVd0NR--Y38sQKR2DMKeA&usqp=CAU",
  },
  {
    name: "IIT Delhi",
    logo: "https://home.iitd.ac.in/images/logo-iit.png",
  },
  {
    name: "IIIT Allahabad",
    logo: "data:image/png;base64,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",
  },
  {
    name: "NIT Warangal",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKa-5uMmi5pXQIn6Lo8uw9vm5VMKPR2krAng&s",
  },
  {
    name: "IIIT Pune",
    logo: "https://cdn.prod.website-files.com/63a98d7ca37497b26e5ba22c/6690dd0f062f8a79b725df53_6690c66b5cdbde9ec49b39a7_IIITP_logo%2520(1).jpeg",
  },
];

const profiles = [
  {
    name: "Arjun Mehta",
    college: "Software Engineer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQG4Tk4CC3F7_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1563381600737?e=2147483647&v=beta&t=ZDzbNQvF3bVeZ36ZxVfTaY8KM7dlMtWTjlamUXF9tnQ",
    date: "April 1 2025",
  },
  {
    name: "Riya Sharma",
    college: "Product Manager",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQHx7o65rvRs2w/profile-displayphoto-shrink_200_200/B56ZRQUWArHQAY-/0/1736514299073?e=2147483647&v=beta&t=xJrk51Mt9v1QIkHdzLWpb8ppmhf_zcdP_Pi0YZyYw5U",
    date: "April 5 2025",
  },
  {
    name: "Kabir Singh",
    college: "Data Scientist",
    imageUrl:
      "https://dilab.gatech.edu/test/wp-content/uploads/2024/06/RudraSingh-scaled.jpg",
    date: "April 10 2025",
  },
  {
    name: "Sneha Patil",
    college: "UI/UX Designer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQFAq3CU-fZ92g/profile-displayphoto-shrink_200_200/B56ZUc6rcbHsAY-/0/1739946900154?e=2147483647&v=beta&t=WIEqz-ADDM40zfDl6lq6Wn6wSBrwr1o_FToQImXh9D8",
    date: "May 1 2025",
  },
  {
    name: "Devansh Kapoor",
    college: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/48.jpg",
    date: "May 5 2025",
  },
  {
    name: "Meera Joshi",
    college: "Data Analyst",
    imageUrl:
      "https://th.bing.com/th/id/OIP.pkQj1oenT_vYiHsvZcSG-gAAAA?rs=1&pid=ImgDetMain",
    date: "May 10 2025",
  },
  {
    name: "Aniket Rao",
    college: "Backend Developer",
    imageUrl: "https://randomuser.me/api/portraits/men/50.jpg",
    date: "May 11 2025",
  },
  {
    name: "Pooja Sinha",
    college: "Frontend Developer",
    imageUrl: "https://www.partymap.in/imgprof/instagrammer-meera-joshi.jpg",
    date: "May 15 2025",
  },
  {
    name: "Harsh Vardhan",
    college: "DevOps Engineer",
    imageUrl:
      "data:image/jpeg;base64,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",
    date: "May 20 2025",
  },
  {
    name: "Isha Reddy",
    college: "AI Engineer",
    imageUrl:
      "https://i0.wp.com/goakhdar.com/wp-content/uploads/2020/10/Founder-Go-Akhdar-Isha-Reddy.jpg?resize=248%2C230",
    date: "May 25 2025",
  },
];

export default function CompanyDashBoard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
      <CompanyNavBar menuItems={NavBarMenu}></CompanyNavBar>
      {/* Welcome Banner */}
      <div className="py-20 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 z-10">
        <section className="bg-linear-to-t from-purple-400 to-indigo-500 text-white  rounded-xl mx-4 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="p-6">
            <h3 className="text-sm py-4">1st April </h3>
            <h1 className="text-3xl font-bold">Welcome back, Company!</h1>
            <p className="text-gray-200">
              Always stay updated in your this portal
            </p>
          </div>
          <div className="flex items-baseline gap-4 px-5">
            {/* Only visible on md (medium) and larger screens */}
            <img src={cap} alt="cap" className="hidden md:block " />
            <img src={bag} alt="bag" className="hidden md:block" />

            {/* Always visible */}
            <img src={student} alt="student" className="sm:block pt-5" />
          </div>
        </section>

        <div className="my-6 border-b border-gray-300"></div>

        {/* Job Applications */}
        <section className="mt-6 px-10">
          <h2 className="text-xl font-semibold text-black">
            Colleges To Recruit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {colleges
              .slice(0, showMore ? colleges.length : 5)
              .map((company, index) => (
                <div
                  key={index}
                  className="p-4 bg-linear-to-t from-purple-100 to-gray-200 drop-shadow-md shadow rounded-lg flex flex-col items-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 w-20 mb-2"
                  />
                  <div className="border h-1 w-20 bg-black"></div>
                  <p className="text-gray-800">{company.name}</p>
                </div>
              ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-gray-100 text-blue-600 rounded mx-auto block hover:bg-blue-100"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </section>

        <div className="my-6 border-b border-gray-300"></div>

        {/* Completed Courses */}
        <section className="mt-6 px-10">
          <h2 className="text-xl font-semibold">On Campus Hiring</h2>
          <div className="items-center grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 mt-4 ">
            {profiles.map((profile, index) => (
              <CompanyProfileCard
                key={index}
                name={profile.name}
                college={profile.college}
                image={profile.imageUrl}
                date={profile.date}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
