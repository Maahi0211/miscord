import { useState } from 'react';

const Settings = ({ onClose }: { onClose: () => void }) => {
  const [activeSection, setActiveSection] = useState('My Account');

  return (
    <div className="flex flex-1 bg-[#313338] h-screen">
      {/* Left Sidebar */}
      <div className="w-[232px] bg-[#2b2d31] p-3">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-2 py-1.5 bg-[#1e1f22] text-gray-200 rounded text-sm"
          />
        </div>

        {/* Settings Categories */}
        <div className="space-y-1">
          <h3 className="px-2.5 text-xs font-semibold text-gray-400 mb-2">USER SETTINGS</h3>
          <button
            className={`w-full text-left px-2.5 py-1.5 rounded text-sm ${
              activeSection === 'My Account' ? 'bg-[#404249] text-white' : 'text-gray-300 hover:bg-[#35373c] hover:text-white'
            }`}
            onClick={() => setActiveSection('My Account')}
          >
            My Account
          </button>
          <button className="w-full text-left px-2.5 py-1.5 rounded text-sm text-gray-300 hover:bg-[#35373c] hover:text-white">
            Profiles
          </button>
          <button className="w-full text-left px-2.5 py-1.5 rounded text-sm text-gray-300 hover:bg-[#35373c] hover:text-white">
            Privacy & Safety
          </button>
          {/* Add more menu items */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-white">My Account</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#404249]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="bg-[#232428] rounded-lg p-4">
          <div className="flex items-start gap-4">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src="/default-avatar.png"
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#232428]" />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <button className="px-4 py-1 bg-[#5865f2] text-white rounded-md text-sm hover:bg-[#4752c4] transition-colors">
                Edit User Profile
              </button>

              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-400">DISPLAY NAME</label>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white">Username</span>
                    <button className="px-2 py-1 bg-[#4f545c] text-xs text-white rounded hover:bg-[#5d6269]">
                      Edit
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400">EMAIL</label>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white">user@example.com</span>
                    <button className="px-2 py-1 bg-[#4f545c] text-xs text-white rounded hover:bg-[#5d6269]">
                      Edit
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400">PHONE NUMBER</label>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white">•••••••1234</span>
                    <div className="flex gap-2">
                      <button className="px-2 py-1 bg-[#4f545c] text-xs text-white rounded hover:bg-[#5d6269]">
                        Remove
                      </button>
                      <button className="px-2 py-1 bg-[#4f545c] text-xs text-white rounded hover:bg-[#5d6269]">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="mt-8">
          <h3 className="text-white text-lg font-semibold mb-4">Password and Authentication</h3>
          <button className="px-4 py-2 bg-[#5865f2] text-white rounded-md text-sm hover:bg-[#4752c4] transition-colors">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;