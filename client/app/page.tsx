"use client";

import Link from "next/link";
import Image from "next/image";
import MiscordLogo from "@/public/Miscord.png";
import { useEffect, useState } from "react";

// Fake notification data
const notifications = [
  "John joined the server",
  "Sarah sent a message",
  "New voice channel created",
  "Gaming session started",
  "Alex shared a file",
  "New event scheduled",
];

export default function LandingPage() {
  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#313338] relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/40 via-transparent to-[#eb459e]/40 animate-gradient-slow"></div>

        {/* Animated blobs with more movement */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px]
            bg-[#5865F2]/30 rounded-full filter blur-[60px]
            animate-floating-blob transform-gpu"
          ></div>

          <div
            className="absolute top-1/3 right-1/4 w-[400px] h-[400px]
            bg-[#eb459e]/30 rounded-full filter blur-[60px]
            animate-floating-blob-delayed-1 transform-gpu"
          ></div>

          <div
            className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px]
            bg-[#3ba55c]/30 rounded-full filter blur-[60px]
            animate-floating-blob-delayed-2 transform-gpu"
          ></div>

          <div
            className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px]
            bg-[#faa61a]/30 rounded-full filter blur-[60px]
            animate-floating-blob-delayed-3 transform-gpu"
          ></div>
        </div>
      </div>

      {/* Content Container */}
     {/* Content Container */}
     <div className="relative z-10">
        {/* Floating Navbar */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/10 backdrop-blur-xl z-50 rounded-xl border border-white/20 shadow-lg shadow-black/10">
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-4 animate-fadeInLeft">
                <div className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                  <Image
                    src={MiscordLogo}
                    alt="Miscord Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="ml-2 text-white font-bold text-xl">Miscord</span>
                </div>

                {/* Separator */}
                <div className="hidden md:block h-6 w-px bg-white/10"></div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 animate-fadeInDown">
                  <Link href="#features" className="text-gray-300 hover:text-white transition-colors relative group">
                    Features
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </Link>
                  <Link href="#safety" className="text-gray-300 hover:text-white transition-colors relative group">
                    Safety
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </Link>
                  <Link href="#support" className="text-gray-300 hover:text-white transition-colors relative group">
                    Support
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </Link>
                  <Link href="#blog" className="text-gray-300 hover:text-white transition-colors relative group">
                    Blog
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </Link>
                </div>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4 animate-fadeInRight">
                <Link href="/login" className="text-white hover:text-gray-200 transition-colors px-4 py-2 rounded-md hover:bg-white/5">
                  Login
                </Link>
                <Link href="/signup" className="bg-[#5865F2] text-white px-4 py-2 rounded-md hover:bg-[#4752C4] transition-all duration-200 transform hover:scale-105 hover:shadow-lg shadow-[#5865F2]/50">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex min-h-screen items-center justify-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
                Your Place to Talk{" "}
                <span className="text-[#5865F2]">and Connect</span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fadeInUp animation-delay-200">
                Whether you're part of a school club, gaming group, worldwide art community,
                or just a handful of friends that want to spend time together, Miscord makes
                it easy to talk every day and hang out more often.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-300">
                <Link href="/signup" className="w-full sm:w-auto bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center gap-2 font-medium hover:scale-105 transform">
                  <span>Get Started</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/login" className="w-full sm:w-auto bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20 hover:scale-105 transform">
                  Open Miscord in Browser
                </Link>
              </div>
            </div>

            {/* Floating Notifications */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 animate-float">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl p-4 rounded-lg shadow-lg transform transition-all duration-500 border border-white/20"
                  style={{
                    animationDelay: `${index * 1000}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <p className="text-white text-sm">{notifications[currentNotification]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeInUp animation-delay-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "Create an invite-only place",
                description: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Where hanging out is easy",
                description: "Grab a seat in a voice channel when you're free. Friends can see you're around and pop in to talk.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                ),
              },
              {
                title: "From few to a fandom",
                description: "Get any community running with moderation tools and custom member access.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#5865F2] to-[#eb459e] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5865F2] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white/10 backdrop-blur-xl relative z-10 mt-20 border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Footer content from previous response */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/20">
              {/* Main Info */}
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-[#5865F2] font-bold text-3xl mb-4">IMAGINE A PLACE</h2>
                <div className="flex items-center gap-4 mb-4">
                  {/* Social Links */}
                  <Link href="#" className="text-white hover:text-[#5865F2] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-white hover:text-[#5865F2] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-white hover:text-[#5865F2] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={MiscordLogo}
                    alt="Miscord Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-white">Download Now</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-[#5865F2] font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Download</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Nitro</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Status</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">App Directory</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-[#5865F2] font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Jobs</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Brand</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Image
                  src={MiscordLogo}
                  alt="Miscord Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 mr-2"
                />
                <span className="text-white font-bold text-xl">Miscord</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
                <Link href="#" className="hover:text-white transition-colors">Guidelines</Link>
                <Link href="#" className="hover:text-white transition-colors">Acknowledgements</Link>
                <Link href="#" className="hover:text-white transition-colors">Licenses</Link>
                <Link href="#" className="hover:text-white transition-colors">Moderation</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
