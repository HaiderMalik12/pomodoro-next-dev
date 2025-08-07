"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Cookies from "js-cookie";
import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/api";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const loggedIn = useAuthStore((state) => state.loggedIn);
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("access_token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    Cookies.remove("access_token");
    setLoggedIn(false);
    await logout();
    router.push("/login");
  };

  const AuthLinks = () => (
    <>
      <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
        Dashboard
      </Link>
      <Link href="/profile" className="text-gray-700 hover:text-blue-600">
        Profile
      </Link>
      <button
        onClick={handleLogout}
        className="text-gray-700 hover:text-red-600 focus:outline-none"
      >
        Logout
      </button>
    </>
  );

  const GuestLinks = () => (
    <>
      <Link href="/login" className="text-gray-700 hover:text-blue-600">
        Login
      </Link>
      <Link href="/register" className="text-gray-700 hover:text-blue-600">
        Register
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          AI Pomodoro
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          {loggedIn ? <AuthLinks /> : <GuestLinks />}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2 pb-4">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          {loggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="block text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="block text-gray-700 hover:text-blue-600"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left text-gray-700 hover:text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block text-gray-700 hover:text-blue-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
