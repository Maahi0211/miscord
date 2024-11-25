'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Settings from './Settings';

const AppLayout = () => {
  const [currentView, setCurrentView] = useState<'home' | 'settings'>('home');
  const [selectedServer, setSelectedServer] = useState(null);

  const handleHomeClick = () => {
    setCurrentView('home');
    setSelectedServer(null);
  };

  const handleServerClick = (server) => {
    setSelectedServer(server);
  };

  return (
    <div className="flex">
      <Sidebar
        onSettingsClick={() => setCurrentView('settings')}
        onHomeClick={handleHomeClick}
        onServerClick={handleServerClick}
      />
      {currentView === 'settings' ? (
        <Settings onClose={() => setCurrentView('home')} />
      ) : (
        <MainContent selectedServer={selectedServer} />
      )}
    </div>
  );
};

export default AppLayout;