import AuthForm from "@components/Sections/AuthForm";
import Testimonials from "@components/Sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function LoginPage() {
    useChangeTitle("Login");
    return (
        <div className="login-page">
            <AuthForm />
            <Testimonials />
        </div>
    )
}

export default LoginPage;