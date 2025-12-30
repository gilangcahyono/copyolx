import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold">
          Login to your account
        </h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" minLength={6} />
        <Button type="sub">Login</Button>
        <span>
          Don&apos;t have an account ?{" "}
          <Link className="text-blue-600 hover:underline" href="/register">
            Register
          </Link>
        </span>
      </form>
    </AuthLayout>
  );
};

export default Login;
