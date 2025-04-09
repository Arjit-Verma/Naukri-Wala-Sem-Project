import LandPageNavBar from "../components/LandPageNav";
import { MenuItem } from "../functions/NavBarItem";
import {
  Rocket,
  Users,
  GraduationCap,
  Briefcase,
  Star,
  LayoutDashboard,
  FileSearch,
  CalendarCheck,
  BarChart2,
  Mail,
  Settings,
  Zap,
} from "lucide-react";
import arjit from "../assets/arjit.jpg";
import sreehitha from "../assets/sreehitha.jpg";
import digant from "../assets/digant.jpg";

import pic from "../assets/digant.jpg";
const NavBarMenu: MenuItem[] = [
  { id: 0, title: "Info", link: "/" },
  { id: 1, title: "Students", link: "/student" },
  { id: 2, title: "University", link: "/college" },
  { id: 3, title: "Company", link: "/company" },
  { id: 4, title: "Services", link: "/services" },
  { id: 5, title: "About Us", link: "/aboutus" },
];
const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Digant Singh",
      role: "Absent Father",
      pic: digant,
      bio: "Data and Magic. Also words",
      funFact: "Lowkey Cool",
    },
    {
      name: "Arjit Verma",
      role: "Sneaky Awesome",
      pic: arjit,
      bio: "Developer,Learner and Sligthly Epic",
      funFact: "Can pull things off",
    },
    {
      name: "K. Sreehitha",
      role: "Focus Freak",
      pic: sreehitha,
      bio: "Doing my thing ,one day at a time",
      funFact:
        "Once googled how to become a billionar and took notes seriously",
    },
    {
      name: "Srikar Emani",
      role: "Data Scientist",
      pic: "",
      bio: "Turns raw data into actionable insights and smart algorithms",
      funFact: "",
    },
    {
      name: "Nomtha Prakash",
      role: "DevOps Engineer",
      pic: "",
      bio: "Keeps our systems running smoothly 24/7",
      funFact: "Amateur drone photographer",
    },
    {
      name: "Azmi Nabeel",
      role: "Competitive Programmer",
      pic: "",
      bio: "Ensures every user gets the most from our platform",
      funFact: "Has visited 15 countries",
    },
  ];

  return (
    <div className="min-h-screen ">
      <LandPageNavBar menuItems={NavBarMenu}></LandPageNavBar>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 mb-6">
          <Rocket className="mr-2 h-5 w-5" />
          <span className="font-medium">Redefining Campus Recruitment</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-6">
          Where Careers Begin & Thrive
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Naukriwala is an end-to-end ERP system bridging students, recruiters,
          and career centers with smart technology.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                We're Not Just Another Placement Portal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Born out of the need to modernize campus recruitment, Naukriwala
                brings structure to chaos, clarity to confusion, and opportunity
                to ambition.
              </p>
              <p className="text-lg text-gray-600">
                From smart resume parsing to real-time recruitment tracking,
                we've reimagined how talent meets opportunity.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-6 flex flex-col items-center justify-center">
              <Zap className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                Our Vision
              </h3>
              <p className="text-center text-indigo-700">
                To create the most seamless, transparent, and effective campus
                recruitment ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Who We Serve
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Student Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-blue-600 p-6">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  For Students
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                You're not just a number. Get a personalized, transparent
                placement experience with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Application tracking dashboard</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>ATS-optimized resume scoring</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Interview call notifications</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recruiter Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-indigo-600 p-6">
              <div className="flex items-center">
                <Briefcase className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  For Recruiters
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Stop sifting through piles of resumes. Our tools help you:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Find candidates with smart filters</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>AI-powered candidate matching</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Detailed candidate analytics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CGC Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-purple-600 p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  For CGC/TPOs
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Your all-in-one control center for campus placements:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Event scheduling & coordination</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Centralized student database</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Placement analytics dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet The Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                {/* <span className="text-5xl font-bold text-white">
                  {member.name.charAt(0)}
                </span> */}
                <img src={member.pic} alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Fun fact:</span>{" "}
                    {member.funFact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <LandPageNavBar menuItems={NavBarMenu}></LandPageNavBar>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 mb-6">
          <Rocket className="mr-2 h-5 w-5" />
          <span className="font-medium">Our Ecosystem</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-6">
          More Than Features — Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're not a product. We're a complete placement ecosystem designed for
          every stakeholder.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Dashboard */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 p-6">
              <div className="flex items-center">
                <LayoutDashboard className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Student Dashboard
                </h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2">
                    <FileSearch className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Real-time Application Tracking
                    </h4>
                    <p className="text-gray-600">
                      See exactly where you stand in every recruitment process
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Resume ATS Scoring
                    </h4>
                    <p className="text-gray-600">
                      Get instant feedback on how recruiters will see your
                      resume
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-2">
                    <CalendarCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Interview Scheduling
                    </h4>
                    <p className="text-gray-600">
                      Never miss an interview with smart reminders
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Recruiter Portal */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-indigo-600 p-6">
              <div className="flex items-center">
                <Briefcase className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Recruiter Portal
                </h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-2">
                    <FileSearch className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Smart Candidate Search
                    </h4>
                    <p className="text-gray-600">
                      Filter by skills, GPA, projects and more
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-2">
                    <BarChart2 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Resume Parsing & Scoring
                    </h4>
                    <p className="text-gray-600">
                      Automated analysis of candidate resumes
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-2">
                    <Mail className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Direct Communication
                    </h4>
                    <p className="text-gray-600">
                      Reach candidates or CGCs with one click
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CGC Management */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-purple-600 p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  CGC Management Suite
                </h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-lg p-2">
                    <LayoutDashboard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Centralized Database
                    </h4>
                    <p className="text-gray-600">
                      All student and company data in one place
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-lg p-2">
                    <BarChart2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Placement Analytics
                    </h4>
                    <p className="text-gray-600">
                      Visual insights into placement trends
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-lg p-2">
                    <Settings className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Customizable Access
                    </h4>
                    <p className="text-gray-600">
                      Control who sees what in your college
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Integration & Support */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-green-600 p-6">
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Integration & Support
                </h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-lg p-2">
                    <Settings className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Seamless Integration
                    </h4>
                    <p className="text-gray-600">
                      Works with your existing college systems
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-lg p-2">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Dedicated Support
                    </h4>
                    <p className="text-gray-600">
                      Onboarding and ongoing assistance
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-lg p-2">
                    <Rocket className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Continuous Updates
                    </h4>
                    <p className="text-gray-600">
                      Regular improvements based on your feedback
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Campus Recruitment?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Whether you're a student, recruiter, or CGC — we're here to make the
            process easy, efficient, and extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Get Started for Students
            </button>
            <button className="px-6 py-3 bg-indigo-800 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
              Recruiter Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { AboutUsPage, ServicesPage };
