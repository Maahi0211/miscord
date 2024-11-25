import { useState } from 'react';

type ModalStep = 'initial' | 'create' | 'join';

const ServerModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<ModalStep>('initial');
  const [serverName, setServerName] = useState('');
  const [serverDescription, setServerDescription] = useState('');
  const [inviteLink, setInviteLink] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission based on step
    if (step === 'create') {
      // Handle server creation
      console.log('Create server:', { serverName, serverDescription });
    } else if (step === 'join') {
      // Handle server joining
      console.log('Join server:', { inviteLink });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#313338] rounded-lg p-8 w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={() => {
            setStep('initial');
            onClose();
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#404249] transition-all"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <path
              d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {step === 'initial' && (
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h2 className="text-2xl text-white font-bold mb-2">Add a Server</h2>
              <p className="text-gray-400 text-sm">Your server is where you and your friends hang out. Make yours and start talking.</p>
            </div>
            <button
              onClick={() => setStep('create')}
              className="p-4 bg-[#404249] text-white rounded-lg hover:bg-[#4752C4] transition-colors flex items-center gap-3"
            >
              <div className="bg-[#4752C4] p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"/>
                </svg>
              </div>
              <span>Create a Server</span>
            </button>
            <button
              onClick={() => setStep('join')}
              className="p-4 bg-[#404249] text-white rounded-lg hover:bg-[#4752C4] transition-colors flex items-center gap-3"
            >
              <div className="bg-[#4752C4] p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
                </svg>
              </div>
              <span>Join a Server</span>
            </button>
          </div>
        )}

        {step === 'create' && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl text-white font-bold mb-4">Create a Server</h2>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300 text-sm font-medium">SERVER NAME</label>
              <input
                type="text"
                placeholder="Enter server name"
                value={serverName}
                onChange={(e) => setServerName(e.target.value)}
                className="p-2.5 rounded bg-[#1e1f22] text-white border border-[#222327] focus:border-[#4752C4] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300 text-sm font-medium">SERVER DESCRIPTION</label>
              <textarea
                placeholder="Enter server description"
                value={serverDescription}
                onChange={(e) => setServerDescription(e.target.value)}
                className="p-2.5 rounded bg-[#1e1f22] text-white border border-[#222327] focus:border-[#4752C4] outline-none min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              className="p-3 bg-[#4752C4] text-white rounded-lg hover:bg-[#4752C4]/80 transition-colors mt-4 font-medium"
            >
              Create Server
            </button>
          </form>
        )}

        {step === 'join' && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl text-white font-bold mb-4">Join a Server</h2>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300 text-sm font-medium">INVITE LINK</label>
              <input
                type="text"
                placeholder="Enter an invite link"
                value={inviteLink}
                onChange={(e) => setInviteLink(e.target.value)}
                className="p-2.5 rounded bg-[#1e1f22] text-white border border-[#222327] focus:border-[#4752C4] outline-none"
              />
              <span className="text-gray-400 text-sm">Examples: discord.gg/hTKzmak</span>
            </div>
            <button
              type="submit"
              className="p-3 bg-[#4752C4] text-white rounded-lg hover:bg-[#4752C4]/80 transition-colors mt-4 font-medium"
            >
              Join Server
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ServerModal;