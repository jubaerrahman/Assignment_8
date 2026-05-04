"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){

  const session = authClient.useSession();
  const user = session.data?.user;

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <div className="border-b px-4 py-3">

      <div className="flex justify-between items-center">

        <h1 className="font-bold text-lg">SkillSphere</h1>

        {/* mobile menu button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* desktop menu */}
        <div className="hidden md:flex gap-4 items-center">

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

      {/* mobile menu */}
      {open && (
        <div className="flex flex-col gap-3 mt-3 md:hidden">

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
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <Avatar.Image src={user?.image}/>
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span>{user?.name}</span>
              </div>

              <Button size="sm" variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}

        </div>
      )}

    </div>
  );
}