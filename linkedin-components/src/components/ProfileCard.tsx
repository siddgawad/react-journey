type Props = {
    name: string;
    avatarUrl: string;
    headline: string;
    location: string;
  };
  
  export const ProfileCard = ({ name, avatarUrl, headline, location }: Props) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
        {/* Header - LinkedIn branding */}
        <div className="bg-gray-200 px-4 py-3">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-xl">Linked</span>
            <span className="bg-blue-600 text-white font-bold px-1 py-0.5 rounded text-sm ml-0.5">in</span>
          </div>
        </div>
        
        {/* Profile Section */}
        <div className="px-6 py-6 relative">
          {/* Connection button (top right) */}
          <div className="absolute top-4 right-4">
            <button className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </button>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src={avatarUrl}
              alt={name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          
          {/* Name */}
          <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
            {name}
          </h2>
          
          {/* Headline */}
          <p className="text-gray-700 text-center mb-3 leading-snug">
            {headline}
          </p>
          
          {/* Location/Education */}
          <p className="text-gray-600 text-sm text-center mb-6">
            {location}
          </p>
          
          {/* View Profile Button */}
          <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2.5 px-4 rounded-full hover:bg-blue-50 transition-colors duration-200">
            View profile
          </button>
        </div>
      </div>
    );
  };