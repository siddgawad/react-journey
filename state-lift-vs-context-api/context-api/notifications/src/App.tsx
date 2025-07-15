import { NotificationBanner } from "./components/NotificationBanner";
import { NotificationProvider } from "./context/NotificationProvider";

export default function App(){
  return(
    <NotificationProvider>
      <NotificationBanner />
    </NotificationProvider>
  )
}