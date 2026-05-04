"use client";

import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {

  const params = useSearchParams();
  const callbackURL = params.get("callbackURL") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL,
    });

    if (error) {
      alert("Invalid email or password");
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-16 space-y-4 p-4 border rounded">

      <h1 className="text-2xl font-bold text-center">Login</h1>

      <form onSubmit={onSubmit} className="space-y-3">

        <input name="email" placeholder="Email" className="border w-full p-2 rounded"/>
        <input name="password" type="password" placeholder="Password" className="border w-full p-2 rounded"/>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>

      <button onClick={handleGoogle} className="w-full border py-2 rounded">
        Continue with Google
      </button>

      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-600">Register</Link>
      </p>

    </div>
  );
}