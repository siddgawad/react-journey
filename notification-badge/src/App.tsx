import { useState } from "react";
import { Dropdown } from "./components/Dropdown";
import type { Notification } from "../type";


const initialNotifications: Notification[] = [
  { id: 1, message: "Welcome to the app! We're excited to have you here.", unreadCount: true },
  { id: 2, message: "You have a new follower! Check out their profile.", unreadCount: true },
  { id: 3, message: "Your password was changed successfully for security.", unreadCount: false },
  { id: 4, message: "New update available with exciting features.", unreadCount: true },
  { id: 5, message: "Your subscription will expire in 3 days.", unreadCount: false },
];

// Main App Component
export default function App() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [showDropDown, setShowDropDown] = useState(false);

  function markAsRead(id: number) {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, unreadCount: false } : notif
      )
    );
  }

  function markAllAsRead() {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, unreadCount: false }))
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Demo container */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Notification Dropdown Demo
          </h1>
          <p className="text-gray-600">
            Click the bell icon to see your notifications
          </p>
        </div>
        
        {/* Dropdown positioned in top-right area */}
        <div className="flex justify-end">
          <Dropdown
            notifications={notifications}
            markAsRead={markAsRead}
            markAllAsRead={markAllAsRead}
            showDropDown={showDropDown}
            setShowDropDown={setShowDropDown}
          />
        </div>
      </div>
    </div>
  );
}