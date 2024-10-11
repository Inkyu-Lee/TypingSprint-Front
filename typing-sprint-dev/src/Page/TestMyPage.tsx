import { Clock, Edit, Settings, Target, Trophy } from 'lucide-react';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  JD
                </div>
              </div>
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
                    <p className="text-lg text-gray-600">@johndoe</p>
                  </div>
                  <button className="mt-2 sm:mt-0 text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">
                    <Edit className="h-6 w-6" />
                    <span className="sr-only">프로필 편집</span>
                  </button>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <Trophy className="h-4 w-4 mr-2" />
                    레벨 10
                  </div>
                  <div className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    <Target className="h-4 w-4 mr-2" />
                    총 게임 수: 50
                  </div>
                  <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 mr-2" />
                    평균 WPM: 75
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition duration-150 ease-in-out">
                <Settings className="h-6 w-6 text-gray-600" />
                <span className="sr-only">설정</span>
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 bg-gray-50 p-6 sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">최근 게임 기록</h2>
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-lg text-gray-900">게임 #{index + 1}</span>
                    <span className="text-sm text-gray-500">2024-10-05</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">WPM</p>
                      <p className="font-semibold text-blue-600">80</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">정확도</p>
                      <p className="font-semibold text-green-600">95%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">점수</p>
                      <p className="font-semibold text-purple-600">7800</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage;