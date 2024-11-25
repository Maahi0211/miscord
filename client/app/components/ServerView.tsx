'use client';

const ServerView = () => {
  return (
    <div className="flex flex-1 bg-[#313338]">
      {/* Channel Sidebar */}
      <div className="w-60 bg-[#2B2D31] flex flex-col">
        {/* Server Header */}
        <div className="h-12 px-4 border-b border-[#1f1f1f] flex items-center justify-between">
          <h2 className="text-white font-medium truncate">Server Name</h2>
          <button className="text-gray-400 hover:text-gray-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM21 12.001C21 10.8964 20.1046 10.001 19 10.001C17.8954 10.001 17 10.8964 17 12.001C17 13.1055 17.8954 14.001 19 14.001C20.1046 14.001 21 13.1055 21 12.001Z"/>
            </svg>
          </button>
        </div>

        {/* Channel Categories */}
        <div className="flex-1 overflow-y-auto">
          {/* Text Channels */}
          <div className="px-2 mt-4">
            <div className="flex items-center justify-between px-1 text-xs text-gray-400 hover:text-gray-200 cursor-pointer">
              <span>TEXT CHANNELS</span>
              <button className="hover:text-white">+</button>
            </div>
            {/* Channel List */}
            <div className="mt-1 space-y-0.5">
              <div className="flex items-center px-2 py-1 text-gray-400 hover:bg-[#34373C] hover:text-gray-200 rounded cursor-pointer">
                <span className="mr-2">#</span>
                <span>general</span>
              </div>
              <div className="flex items-center px-2 py-1 text-gray-400 hover:bg-[#34373C] hover:text-gray-200 rounded cursor-pointer">
                <span className="mr-2">#</span>
                <span>announcements</span>
              </div>
            </div>
          </div>

          {/* Voice Channels */}
          <div className="px-2 mt-4">
            <div className="flex items-center justify-between px-1 text-xs text-gray-400 hover:text-gray-200 cursor-pointer">
              <span>VOICE CHANNELS</span>
              <button className="hover:text-white">+</button>
            </div>
            {/* Voice Channel List */}
            <div className="mt-1 space-y-0.5">
              <div className="flex items-center px-2 py-1 text-gray-400 hover:bg-[#34373C] hover:text-gray-200 rounded cursor-pointer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195Z"/>
                </svg>
                <span>General</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Channel Header */}
        <div className="h-12 px-4 border-b border-[#1f1f1f] flex items-center">
          <span className="mr-2 text-gray-400">#</span>
          <span className="text-white">general</span>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Message */}
          <div className="flex items-start">
            <img src="/default-avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <div className="flex items-center">
                <span className="text-white font-medium mr-2">Username</span>
                <span className="text-xs text-gray-400">Today at 12:00 PM</span>
              </div>
              <p className="text-gray-200">Message content goes here</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4">
          <div className="bg-[#383A40] rounded-lg">
            <input
              type="text"
              placeholder="Message #general"
              className="w-full bg-transparent px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerView;