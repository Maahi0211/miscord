"use client";

import { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Redirect to login after successful registration
      window.location.href = '/login';
    } catch (err) {
      setError(err.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f2f3f5] p-4 dark:bg-[#030711]">
      <div className="w-full max-w-[800px] overflow-hidden rounded-lg bg-white shadow-xl dark:bg-[#2b2d31]">
        <div className="flex min-h-[600px]">
          {/* Left side - Form */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold leading-tight text-[#060607] dark:text-white">
                Create an account
              </h2>
              <p className="mt-1 text-sm text-[#4e5058] dark:text-[#b5bac1]">
                Join our community today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-500 dark:bg-red-500/10">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-xs font-medium text-[#4e5058] dark:text-[#b5bac1]">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full rounded-[3px] border border-[#e3e5e8] bg-transparent px-3 py-2 text-[#060607] placeholder-[#4e5058] outline-none focus:border-[#5865f2] dark:border-[#1e1f22] dark:text-white dark:placeholder-[#72767d] dark:focus:border-[#5865f2]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium text-[#4e5058] dark:text-[#b5bac1]">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-[3px] border border-[#e3e5e8] bg-transparent px-3 py-2 text-[#060607] placeholder-[#4e5058] outline-none focus:border-[#5865f2] dark:border-[#1e1f22] dark:text-white dark:placeholder-[#72767d] dark:focus:border-[#5865f2]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium text-[#4e5058] dark:text-[#b5bac1]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Choose a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-[3px] border border-[#e3e5e8] bg-transparent px-3 py-2 text-[#060607] placeholder-[#4e5058] outline-none focus:border-[#5865f2] dark:border-[#1e1f22] dark:text-white dark:placeholder-[#72767d] dark:focus:border-[#5865f2]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-[3px] bg-[#5865f2] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4752c4] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>

              <div className="mt-2 text-center text-sm text-[#4e5058] dark:text-[#b5bac1]">
                Already have an account?{' '}
                <a href="/login" className="text-[#00a8fc] hover:underline dark:text-[#00aff4]">
                  Sign in
                </a>
              </div>
            </form>
          </div>

          {/* Right side - Decorative */}
          <div className="hidden bg-gradient-to-br from-[#5865f2] to-[#4752c4] lg:block lg:w-1/2">
            <div className="flex h-full flex-col items-center justify-center p-12 text-white">
              <div className="text-center">
                <h3 className="mb-4 text-3xl font-bold">Welcome to our community</h3>
                <p className="mb-6 text-lg opacity-90">
                  Join thousands of users and start your journey today
                </p>
                <div className="space-y-4 text-sm opacity-75">
                  <p>✓ Connect with others</p>
                  <p>✓ Share your ideas</p>
                  <p>✓ Build something amazing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;