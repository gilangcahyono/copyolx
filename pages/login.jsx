import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(inputs.username);

  return (
    <AuthLayout>
      <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold">
          Login to your account
        </h1>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <Input type="password" placeholder="Password" minLength={6} />
        <Button type="sub">Login</Button>
        <span className="text-sm">
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
