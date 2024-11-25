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
    <div className="flex min-h-screen items-center justify-center bg-white p-4 dark:bg-[#030711]">
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
      <div className="relative w-full max-w-md">
        {/* Decorative elements */}
        <div className="absolute -left-4 -top-4 size-72 animate-pulse rounded-full bg-blue-500 opacity-10 blur-3xl dark:bg-blue-600"></div>
        <div className="absolute -bottom-4 -right-4 size-72 animate-pulse rounded-full bg-purple-500 opacity-10 blur-3xl dark:bg-purple-600"></div>

        <div className="relative overflow-hidden rounded-xl backdrop-blur-sm">
          <div className="rounded-xl border border-gray-200 bg-white/80 p-8 shadow-xl backdrop-blur-lg dark:border-gray-800 dark:bg-gray-800/80">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create an account</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join our community today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="animate-shake rounded-lg bg-red-50/50 p-4 text-sm text-red-700 backdrop-blur-sm dark:bg-red-900/30 dark:text-red-400">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-400 dark:focus:bg-gray-800 dark:focus:ring-blue-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-400 dark:focus:bg-gray-800 dark:focus:ring-blue-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Choose a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800/50 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-400 dark:focus:bg-gray-800 dark:focus:ring-blue-400/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-700"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>

              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <a href="/login" className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  Sign in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;