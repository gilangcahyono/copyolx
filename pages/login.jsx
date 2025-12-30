import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <AuthLayout>
      <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold">
          Login to your account
        </h1>
        <Input
          type="text"
          required
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="Password"
          minLength={6}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
