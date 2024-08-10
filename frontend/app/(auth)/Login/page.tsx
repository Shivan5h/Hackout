"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });
      // Store the token in localStorage or a state management solution
      localStorage.setItem('token', response.data.token);
      // Redirect to a protected page or dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-14">
          <Image
            src="/logo-no-background.png"
            alt="Logo"
            width={150} height={150}
          />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-700 text-white mb-5"
              required 
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-white">
          Don&apos;t have an account?{" "}
          <Link href="/Signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
