import AuthWrapper from "@/components/auth/AuthWrapper";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
}
