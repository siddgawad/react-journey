export type Notification = {
    id: number;
    message: string;
    notifRead: boolean;
    type?: 'connection' | 'message' | 'like' | 'comment';
    timestamp?: string;
    avatar?: string;
  }

