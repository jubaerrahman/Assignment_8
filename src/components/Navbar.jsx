"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

export default function Navbar(){

  const session = authClient.useSession();
  const user = session.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <div className="border-b px-4 py-3 flex justify-between items-center">

      <h1 className="font-bold text-lg">SkillSphere</h1>

      <div className="flex gap-4 items-center">

        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>

        {user && <Link href="/profile">Profile</Link>}

        {!user && (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}

        {user && (
          <>
            <Avatar size="sm">
              <Avatar.Image src={user?.image}/>
              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <Button size="sm" variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}

      </div>

    </div>
  );
}