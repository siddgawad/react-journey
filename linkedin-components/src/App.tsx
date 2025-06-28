import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProfileCard } from "./components/ProfileCard";

export default function App() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Welcome to LinkedUp!", read: false },
    { id: 2, message: "You have a new message.", read: false },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Handle bell click (toggle dropdown)
  const handleBellClick = () => setDropdownOpen((open) => !open);

  // Handle notification click (mark as read)
  const handleNotifClick = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        unreadCount={unreadCount}
        dropdownOpen={dropdownOpen}
        notifications={notifications}
        onBellClick={handleBellClick}
        onNotifClick={handleNotifClick}
      />
      <main className="flex flex-col items-center mt-12">
        <ProfileCard
          name="Jane Doe"
          headline="Full Stack Developer at Acme Inc."
          avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
          location="San Francisco, CA"
        />
      </main>
    </div>
  );
}
