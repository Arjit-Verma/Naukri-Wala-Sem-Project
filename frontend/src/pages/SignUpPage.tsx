import AnimatedBg from "../components/AnimatedBg";
import SignUpComponent from "../components/SignUpComponent";

{
  /*Sign Up Page*/
}
function SignUpPage() {
  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden">
      {/* Background Component */}
      <div className="absolute inset-0 z-0">
        <AnimatedBg />
      </div>

      {/* SignUp Component */}
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <SignUpComponent />
      </div>
    </div>
  );
}

export default SignUpPage;
