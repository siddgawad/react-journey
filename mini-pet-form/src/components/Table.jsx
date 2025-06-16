import {ArrowLeft, PawPrint, User, Mail} from "lucide-react";
export default function Table({ rows, onBack }) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-white/90">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Adoption Applications</h2>
                  <p className="text-gray-600">Review all submitted applications</p>
                </div>
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-all duration-200 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>
              </div>
  
              {rows.length === 0 ? (
                <div className="text-center py-12">
                  <PawPrint className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No applications submitted yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50 rounded-tl-xl">
                          Pet Name
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50">
                          Applicant Name
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50 rounded-tr-xl">
                          Email Address
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-purple-50 transition-colors duration-150"
                        >
                          <td className="py-4 px-6 font-medium text-purple-700">
                            <div className="flex items-center gap-2">
                              <PawPrint className="w-4 h-4" />
                              {row.petName}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-800">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-gray-500" />
                              {row.name}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-600">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-500" />
                              {row.email}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }