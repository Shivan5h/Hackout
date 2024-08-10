"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/signup', {
        email,
        password,
        fullName: name
      });
      // Redirect to login page or show a success message
      window.location.href = '/Login';
    } catch (error) {
      setError('Signup failed. Please try again.');
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
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
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
            <label htmlFor="password" className="block text-white">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-700 text-white"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-white">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
