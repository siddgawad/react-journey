import { useNotification } from "../context/useNotification";

export const NotificationBanner = () => {
    const { message, notify } = useNotification();
  
    return (
      <div>
        {message && (
          <div style={{ padding: "10px", border: "1px solid black", marginBottom: "10px" }}>
            {message}
          </div>
        )}
        <button onClick={() => notify("Logged in successfully")}>Click Me</button>
      </div>
    );
  };
  