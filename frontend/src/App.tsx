import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import StudentLandPage from "./pages/student/StudentLandPage";
import CollegeLandPage from "./pages/college/CollegeLandPage";
import CompanyLandPage from "./pages/company/CompanyLandPage";
import StudentLoginPage from "./pages/student/StudentLoginPage";
import StudentSignupPage from "./pages/student/StudentSignupPage";
import CompanyLoginPage from "./pages/company/CompanyLoginPage";
import CompanySignupPage from "./pages/company/CompanySignupPage";
import CollegeLoginPage from "./pages/college/CollegeLoginPage";
import CollegeSignupPage from "./pages/college/CollegeSignupPage";
import StudentDashboard from "./pages/student/StudentDashBoard";
import StudentProfilePage from "./pages/student/StudentProfilePage";
import StudentColdMail from "./pages/student/StudentColdMail";
import StudentResume from "./pages/student/StudentResume";
import { StudentCompanyList } from "./pages/student/StudentCompanyList";
import CollegeDashboard from "./pages/college/CollegeDashBoard";
import { CollegeCompanyInfo } from "./pages/college/CollegeCompanyInfo";
import { CollegeStudentInfo } from "./pages/college/CollegeStudentInfo";
import { CollegeStats } from "./pages/college/CollegeStats";
import CompanyDashBoard from "./pages/company/CompanyDashBoard";
import { CompanyStats } from "./pages/company/CompanyStats";
import CompanyCollegeInfo from "./pages/company/CompanyCollegeInfo";
import JobListPage from "./pages/company/JobListPage";
import JobEditPage from "./pages/company/JobEditPage";
import CompanyJobUpdate from "./pages/company/CompanyJobUpdate";
import CompanyStudentInfo from "./pages/company/CompanyStudentInfo";
import CompanyApplication from "./pages/company/CompanyApplication";
import StudentAts from "./pages/student/StudentAts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/student"
          element={<StudentLandPage></StudentLandPage>}
        ></Route>
        <Route
          path="/college"
          element={<CollegeLandPage></CollegeLandPage>}
        ></Route>
        <Route
          path="/company"
          element={<CompanyLandPage></CompanyLandPage>}
        ></Route>
        <Route path="/student/login" element={<StudentLoginPage />}></Route>
        <Route path="/student/signup" element={<StudentSignupPage />}></Route>
        <Route path="/student/dashboard" element={<StudentDashboard />}></Route>
        <Route path="/student/profile" element={<StudentProfilePage />}></Route>
        <Route path="/student/coldmail" element={<StudentColdMail />}></Route>
        <Route path="/student/resume" element={<StudentResume />}></Route>
        <Route
          path="/student/companylist"
          element={<StudentCompanyList />}
        ></Route>
        <Route path="/student/ats_score" element={<StudentAts />}></Route>

        <Route path="/college/login" element={<CollegeLoginPage />}></Route>
        <Route path="/college/signup" element={<CollegeSignupPage />}></Route>
        <Route path="/college/dashboard" element={<CollegeDashboard />}></Route>
        <Route
          path="/college/companyinfo"
          element={<CollegeCompanyInfo />}
        ></Route>
        <Route
          path="/college/studentinfo"
          element={<CollegeStudentInfo />}
        ></Route>
        <Route path="/college/stats" element={<CollegeStats />}></Route>
        <Route path="/company/login" element={<CompanyLoginPage />}></Route>
        <Route path="/company/signup" element={<CompanySignupPage />}></Route>
        <Route path="/company/dashboard" element={<CompanyDashBoard />}></Route>

        <Route path="/company/stats" element={<CompanyStats />}></Route>
        <Route
          path="/company/collegeinfo"
          element={<CompanyCollegeInfo />}
        ></Route>
        <Route
          path="/company/studentinfo"
          element={<CompanyStudentInfo />}
        ></Route>
        <Route
          path="/company/application"
          element={<CompanyApplication />}
        ></Route>
        <Route path="company/updatejob" element={<JobListPage />} />
        <Route path="company/updatejob/add" element={<JobEditPage />} />
        <Route path="company/updatejob/edit/:id" element={<JobEditPage />} />
        <Route
          path="company/updatejob/apply/:id"
          element={<CompanyJobUpdate />}
        />

        {/* <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
