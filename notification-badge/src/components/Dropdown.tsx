import React from "react";
import { LuBellRing, LuX, LuCheck } from "react-icons/lu";

// Types
type Notification = {
  id: number;
  message: string;
  unreadCount: boolean;
};

type DropdownProps = {
  notifications: Notification[];
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  showDropDown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

// Enhanced Dropdown Component
export const Dropdown = ({ notifications, markAsRead, markAllAsRead, showDropDown, setShowDropDown }: DropdownProps) => {
  const unread = notifications.filter(n => n.unreadCount).length;
  
  return (
    // Container: relative positioning for absolute dropdown
    <div className="relative">
      {/* Bell Button: Clean, accessible design */}
      <button 
        onClick={() => setShowDropDown(prev => !prev)}
        className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        <LuBellRing className="w-6 h-6 text-gray-700" />
        {/* Badge: Positioned absolutely, modern styling */}
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 animate-pulse">
            {unread}
          </span>
        )}
      </button>

      {/* Dropdown Panel: Conditional rendering with animations */}
      {showDropDown && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 transform origin-top-right animate-in slide-in-from-top-2 duration-200">
          {/* Header: Clean typography hierarchy */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <button 
                onClick={() => setShowDropDown(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <LuX className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            {/* Mark all read button: Only show if there are unread */}
            {unread > 0 && (
              <button 
                onClick={markAllAsRead}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors"
              >
                <LuCheck className="w-4 h-4" />
                Mark all as read
              </button>
            )}
          </div>

          {/* Notifications List: Proper spacing and interactions */}
          <div className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500">
                <LuBellRing className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>No notifications</p>
              </div>
            ) : (
              notifications.map(notif => (
                <div 
                  key={notif.id}
                  onClick={() => markAsRead(notif.id)}
                  className={`px-4 py-3 cursor-pointer transition-all duration-150 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 ${
                    notif.unreadCount 
                      ? 'bg-blue-50 border-l-4 border-l-blue-500' 
                      : 'hover:bg-gray-25'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Read/Unread indicator */}
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      notif.unreadCount ? 'bg-blue-500' : 'bg-gray-300'
                    }`} />
                    
                    {/* Message content */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm leading-relaxed ${
                        notif.unreadCount 
                          ? 'text-gray-900 font-medium' 
                          : 'text-gray-600'
                      }`}>
                        {notif.message}
                      </p>
                      {notif.unreadCount && (
                        <span className="inline-block mt-1 text-xs text-blue-600 font-medium">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};