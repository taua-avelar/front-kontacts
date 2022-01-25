import SideImage from "../components/SideImage/SideImage";
import loginImage from "../assets/login.png";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="container-login" style={{ display: "flex" }}>
      <SideImage image={loginImage} />
      <LoginForm />
    </div>
  );
}
