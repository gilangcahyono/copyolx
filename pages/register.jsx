import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Register = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-center text-2xl font-bold">
          Register your account
        </h1>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button variant="">Register</Button>
        <span>
          Already have an account ?{" "}
          <Link className="text-blue-600 hover:underline" href="/login">
            Login
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Register;
