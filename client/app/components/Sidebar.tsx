"use client";

import Link from "next/link";
import Image from "next/image";
import MiscordLogo from "@/public/Miscord.png";
import ServerModal from './ServerModel';
import { useState } from 'react';

interface Server {
  id: string;
  name: string;
  imageUrl: string;
}

interface SidebarProps {
  onSettingsClick: () => void;
  onHomeClick: () => void;
  onServerClick: (server: Server) => void;
}

const Sidebar = ({ onSettingsClick, onHomeClick, onServerClick }: SidebarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<string | null>(null);

  // Mock servers data - replace with your actual data
  const servers: Server[] = [
    {
      id: '1',
      name: 'Gaming Server',
      imageUrl: '/channel-icon.png'
    },
    // Add more servers as needed
  ];

  const handleServerClick = (server: Server) => {
    setSelectedServer(server.id);
    onServerClick(server);
  };

  return (
    <div className="w-[72px] h-screen bg-[#1e1f22] flex flex-col items-center p-3 gap-2">
      {/* Home Button */}
      <button
        onClick={() => {
          setSelectedServer(null);
          onHomeClick();
        }}
        className={`w-12 h-12 bg-[#313338] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200 hover:bg-indigo-500 ${
          !selectedServer ? 'bg-indigo-500 rounded-2xl' : ''
        }`}
      >
        <Image
          src={MiscordLogo}
          alt="Home"
          width={28}
          height={28}
          className="w-10 h-10"
        />
      </button>

      {/* Separator Line */}
      <div className="w-8 h-[2px] bg-[#35363c] rounded-full my-2" />

      {/* Server List */}
      <div className="flex flex-col gap-2 overflow-y-auto">
        {servers.map((server) => (
          <button
            key={server.id}
            onClick={() => handleServerClick(server)}
            className={`relative w-12 h-12 bg-[#313338] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200 hover:bg-emerald-500 group ${
              selectedServer === server.id ? 'bg-emerald-500 rounded-2xl' : ''
            }`}
          >
            <div className={`absolute left-0 w-1 h-2 bg-white rounded-r-full transition-all ${
              selectedServer === server.id ? 'h-10 opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:h-5'
            }`} />
            <img
              src={server.imageUrl}
              alt={server.name}
              className="w-7 h-7 rounded-full"
            />
          </button>
        ))}
      </div>

      {/* Add Server Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-12 h-12 bg-[#313338] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200 hover:bg-emerald-500 mt-2"
      >
        <span className="text-emerald-500 text-2xl hover:text-white">+</span>
      </button>

      {/* User Controls */}
      <div className="mt-auto w-full pt-2 border-t border-[#35363c]">
        {/* User Avatar */}
        <div className="w-12 h-12 bg-[#313338] rounded-full flex items-center justify-center hover:rounded-2xl transition-all duration-200">
          <img
            src="/default-avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Control Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          {/* Mute */}
          <button className="w-12 h-8 bg-[#313338] rounded-md flex items-center justify-center hover:bg-[#404249] transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200">
              <path d="M12 2.00305C6.486 2.00305 2 6.48905 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48905 17.514 2.00305 12 2.00305Z" />
            </svg>
          </button>

          {/* Deafen */}
          <button className="w-12 h-8 bg-[#313338] rounded-md flex items-center justify-center hover:bg-[#404249] transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200">
              <path d="M12 2.00305C6.486 2.00305 2 6.48905 2 12.0031C2 17.5171 6.486 22.0031 12 22.0031C17.514 22.0031 22 17.5171 22 12.0031C22 6.48905 17.514 2.00305 12 2.00305ZM17 13.0031H7V11.0031H17V13.0031Z" />
            </svg>
          </button>

          {/* Settings */}
          <button
            onClick={onSettingsClick}
            className="w-12 h-8 bg-[#313338] rounded-md flex items-center justify-center hover:bg-[#404249] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-200">
              <path d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Server Modal */}
      <ServerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;