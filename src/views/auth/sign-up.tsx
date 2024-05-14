import AuthCard from "@/views/auth/components/auth-card.tsx";
import AuthNavbar from "@/views/auth/components/auth-navbar.tsx";
const SignUp = () => {

  return (
    <div className="h-screen bg-white dark:bg-dark-tertiary">
      <AuthNavbar />
      <div className="bg-sign-up bg-no-repeat h-[450px] w-full absolute top-0 z-0"></div>
      <div className="w-full flex justify-center bg-white dark:bg-dark-tertiary">
        <AuthCard />
      </div>
    </div>
  );
};

export default SignUp;
