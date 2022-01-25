import SideImage from "../components/SideImage/SideImage";
import registerImage from "../assets/register.png";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <div className="container-login" style={{ display: "flex" }}>
      <RegisterForm />
      <SideImage image={registerImage} />
    </div>
  );
}
