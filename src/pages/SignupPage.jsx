import AuthForm from "@components/Sections/AuthForm";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function SignupPage() {
    useChangeTitle("Signup");
    return (
        <div className="signup-page">
            <AuthForm />
            <Testimonials />
        </div>
    )
}

export default SignupPage;