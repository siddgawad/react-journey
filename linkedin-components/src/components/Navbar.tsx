type NavbarProps = {
    unreadCount: number;
    dropdownOpen: boolean;
    notifications: { id: number; message: string; read: boolean }[];
    onBellClick: () => void;
    onNotifClick: (id: number) => void;
  };
  
  export const Navbar = ({
    unreadCount,
    dropdownOpen,
    notifications,
    onBellClick,
    onNotifClick,
  }: NavbarProps) => (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white shadow sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
      <span className="text-blue-600 font-bold text-xl">Linked</span>
      <span className="bg-blue-600 text-white font-bold px-1 py-0.5 rounded text-sm ml-0.5">in</span>
      </div>
      {/* Notification bell */}
      <div className="relative">
        <button onClick={onBellClick} className="relative">
          <span role="img" aria-label="bell" className="text-2xl">🔔</span>
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              {unreadCount}
            </span>
          )}
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
            <ul>
              {notifications.length === 0 ? (
                <li className="p-4 text-gray-500">No notifications</li>
              ) : (
                notifications.map((notif) => (
                  <li
                    key={notif.id}
                    className={`p-3 border-b hover:bg-gray-100 cursor-pointer ${
                      notif.read ? "text-gray-500" : "font-bold"
                    }`}
                    onClick={() => onNotifClick(notif.id)}
                  >
                    {notif.message}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
      {/* Profile avatar (add more nav items as you wish) */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="profile"
        className="w-8 h-8 rounded-full ml-4"
      />
    </nav>
  );
  