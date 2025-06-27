
import { ProfileCard } from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ProfileCard
        name="Jane Doe"
        headline="Full Stack Developer at Acme Inc."
        avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
        location="San Francisco, CA"
      />
    </div>
  );
}

export default App;
