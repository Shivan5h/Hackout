"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, User, LogOut } from "lucide-react";
import { useRouter } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile = false }) => (
  <Link
    href={href}
    className={`${
      mobile ? 'block py-2' : 'inline-block px-4 py-2'
    } hover:text-gray-200 transition-colors`}
  >
    {children}
  </Link>
);

interface UserData {
  fullName: string;
  avatarUrl?: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token)
        if (!token) {
          router.push('/Login');
          return;
        }

        const response = await fetch('https://hackout-1.onrender.com/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (response.ok) {
          const userData: UserData = await response.json();
          setUser(userData);
        } else {
          router.push('/Login');
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        router.push('/Login');
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/Login');
  };

  const renderUserSection = () => {
    if (!user) {
      return (
        <Link href="/Login" passHref>
          <Button className="hidden md:block bg-gray-900 text-white">Login</Button>
        </Link>
      );
    }

    return (
      <div className="flex items-center">
        {user.avatarUrl ? (
          <Image 
            src={user.avatarUrl} 
            alt={user.fullName} 
            width={40} 
            height={40} 
            className="rounded-full"
          />
        ) : (
          <User className="h-10 w-10 text-gray-400 bg-gray-200 rounded-full p-2" />
        )}
        <span className="ml-2">{user.fullName}</span>
        <Button 
          onClick={handleLogout}
          className="ml-4 hidden md:block bg-gray-700 text-white"
        >
          <LogOut size={16} />
        </Button>
      </div>
    );
  };

  return (
    <nav
      className={`w-full z-10 transition-all duration-300 ${
        scroll ? "bg-gradient-to-bl from-rose-200 to-teal-200 text-white shadow-lg" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
         <Link href="/" className="cursor-pointer bg-gray-500 pl-3 pr-5 pt-2 pb-2 rounded-full"><Image src="/logo-no-background.png" width={200} height={200} alt="Logo" /></Link> 
          <div className="hidden md:flex gap-x-6">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="/Services">Services</NavLink>
            <NavLink href="/dashboard" mobile>Dashboard</NavLink>
          </div>
          {renderUserSection()}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 py-4 text-white">
          <div className="container mx-auto px-4 flex flex-col gap-y-4">
            <NavLink href="#about" mobile>About Us</NavLink>
            <NavLink href="/Services" mobile>Services</NavLink>
            <NavLink href="/dashboard" mobile>Dashboard</NavLink>
            {renderUserSection()}
            <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
