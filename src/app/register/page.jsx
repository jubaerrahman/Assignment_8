"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 space-y-4 p-4 border rounded">

      <h1 className="text-2xl font-bold text-center">Register</h1>

      <form onSubmit={onSubmit} className="space-y-3">

        <input name="name" placeholder="Name" className="border w-full p-2 rounded"/>
        <input name="image" placeholder="Image URL" className="border w-full p-2 rounded"/>
        <input name="email" placeholder="Email" className="border w-full p-2 rounded"/>
        <input name="password" type="password" placeholder="Password" className="border w-full p-2 rounded"/>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Register
        </button>
      </form>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600">Login</Link>
      </p>

    </div>
  );
}