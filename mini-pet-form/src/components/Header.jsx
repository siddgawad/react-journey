
import { Heart, PawPrint} from "lucide-react";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-8 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <PawPrint className="w-8 h-8" />
          <h1 className="text-4xl font-bold">Pet Adoption Form</h1>
          <Heart className="w-8 h-8 text-pink-200" />
        </div>
        <p className="text-lg text-pink-100">Find your perfect furry companion today!</p>
      </div>
    </div>
  );
}