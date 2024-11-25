'use client';

import { useState } from 'react';
import ServerView from './ServerView';

const MainContent = ({ selectedServer = null }) => {
  if (selectedServer) {
    return <ServerView server={selectedServer} />;
  }

  return (
    <div className="flex flex-1 bg-[#313338] min-h-screen">
      <div className="flex flex-col w-full">
        {/* Top Navigation Bar */}
        <div className="h-12 border-b border-[#1f1f1f] flex items-center px-4">
          <div className="flex items-center gap-4">
            <span className="text-white">Friends</span>
            <div className="flex gap-3 text-gray-400">
              <button className="hover:text-white">Online</button>
              <button className="hover:text-white">All</button>
              <button className="hover:text-white">Pending</button>
              <button className="hover:text-white">Blocked</button>
            </div>
            <button className="bg-[#248046] text-white px-2 py-1 rounded">
              Add Friend
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 text-gray-400">
          {/* Friends list content */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;