import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Account created successfully");
    router.push("/login");
  };
  return (
    <AuthLayout>
      <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold">
          Register your account
        </h1>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Username"
          required
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="">Register</Button>
        <span>
          Already have an account ?{" "}
          <Link className="text-blue-600 hover:underline" href="/login">
            Login
          </Link>
        </span>
      </form>
    </AuthLayout>
  );
};

export default Register;
