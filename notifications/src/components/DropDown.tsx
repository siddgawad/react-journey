import { Bell, User, MessageCircle, X } from "lucide-react";
import type { Notification } from "./type";

type DropDownProps = {
  notifications: Notification[];
  markAsRead: (id: number) => void;
  onClose: () => void;
  markAllAsRead:()=>void;
}

export const DropDown = ({ notifications, markAsRead, onClose, markAllAsRead }: DropDownProps) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'connection':
        return <User className="w-4 h-4 text-blue-500" />;
      case 'message':
        return <MessageCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="absolute top-12 right-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>
      
      {/* Notifications List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No notifications yet</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 border-b border-gray-50 cursor-pointer transition-colors hover:bg-gray-50 ${
                !notif.notifRead ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
              }`}
              onClick={() => markAsRead(notif.id)}
            >
              <div className="flex items-start space-x-3">
                {/* Avatar/Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {getNotificationIcon(notif.type || 'default')}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${!notif.notifRead ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                    {notif.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notif.timestamp || '2 hours ago'}
                  </p>
                </div>
                
                {/* Unread indicator */}
                {!notif.notifRead && (
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-3 border-t border-gray-100 bg-gray-50">
          <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium" onClick={()=>markAllAsRead()}>
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
};