import { createContext } from "react";

type NotifProps = {
    message:string|null;
    notify: (msg:string)=>void;
};

export const NotificationContext = createContext<NotifProps|null>(null);

