import { useState } from "react";
import { Bell } from "lucide-react";
import { DropDown } from "./components/DropDown";
import type { Notification } from "./components/type";

export default function App() {
  const [notification, setNotification] = useState<Notification[]>([
    {
      id: 1,
      message: "John Doe sent you a connection request",
      notifRead: false,
      type: 'connection',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      message: "You have a new message from Sundar Pichai",
      notifRead: false,
      type: 'message',
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      message: "Sarah liked your post about React development",
      notifRead: true,
      type: 'like',
      timestamp: '1 day ago'
    }
  ]);
  
  const [dropdownState, setDropDownState] = useState(false);
  const unreadCount = notification.filter(n => !n.notifRead).length;

  function handleDropdown() {
    setDropDownState((prev) => !prev);
  }

  const markAsRead = (id: number) => {
    setNotification(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, notifRead: true } : notif
      )
    );
  };
  const markAllAsRead = () => {
    setNotification(prev =>
      prev.map(notif => ({ ...notif, notifRead: true }))
    );
  };
  

  const closeDropdown = () => {
    setDropDownState(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">SocialApp</h1>
            </div>
            
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={handleDropdown}
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full min-w-[18px] h-[18px]">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
              
              {/* Dropdown */}
              {dropdownState && (
                <DropDown 
                  notifications={notification} 
                  markAsRead={markAsRead}
                  onClose={closeDropdown}
                  markAllAsRead={markAllAsRead}
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {dropdownState && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeDropdown}
        ></div>
      )}

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to SocialApp</h2>
          <p className="text-gray-600">
            Click the notification bell in the top right to see your notifications. 
            You currently have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}.
          </p>
        </div>
      </main>
    </div>
  );
}