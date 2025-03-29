import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
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
        <Route path="/student_login" element={<StudentLoginPage />}></Route>
        <Route path="/student_signup" element={<StudentSignupPage />}></Route>
        <Route path="/company_login" element={<CompanyLoginPage />}></Route>
        <Route path="/company_signup" element={<CompanySignupPage />}></Route>
        <Route path="/college_login" element={<CollegeLoginPage />}></Route>
        <Route path="/college_signup" element={<CollegeSignupPage />}></Route>

        {/* <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
