import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import StudentLandPage from "./pages/student/StudentLandPage";
import CollegeLandPage from "./pages/college/CollegeLandPage";
import CompanyLandPage from "./pages/company/CompanyLandPage";

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
        {/* <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
