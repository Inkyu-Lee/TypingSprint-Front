import { LogOutIcon, MessageCircleIcon, PlayIcon, SendIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'

const TestChat = () => {
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { user: 'System', message: '대기실에 오신 것을 환영합니다!' },
    { user: 'Player1', message: '안녕하세요!' },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      setChatMessages([...chatMessages, { user: 'You', message: chatMessage }])
      setChatMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-4 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-wider mb-2">Typing Sprint</h1>
          <p className="text-xl text-blue-200">게임 대기실</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 플레이어 목록 */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <UserIcon className="w-6 h-6 mr-2" />
              플레이어 (3/4)
            </h2>
            <ul className="space-y-3">
              {['Player1', 'Player2', 'You'].map((player, index) => (
                <li key={index} className="flex items-center space-x-3 bg-white bg-opacity-20 rounded p-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    {player[0]}
                  </div>
                  <span>{player}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 채팅 영역 */}
          <div className="lg:col-span-2 bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MessageCircleIcon className="w-6 h-6 mr-2" />
              채팅
            </h2>
            <div className="flex-grow mb-4 overflow-y-auto h-64 bg-black bg-opacity-30 rounded p-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <span className="font-semibold">{msg.user}: </span>
                  <span>{msg.message}</span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="flex-grow px-3 py-2 bg-white bg-opacity-20 rounded text-white placeholder-gray-300"
              />
              <button type="submit" className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition duration-300">
                <SendIcon className="w-5 h-5" />
                <span className="sr-only">전송</span>
              </button>
            </form>
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="mt-8 flex justify-between items-center">
          <button className="flex items-center space-x-2 bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 text-lg font-semibold">
            <PlayIcon className="w-6 h-6" />
            <span>게임 시작</span>
          </button>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-gray-600 bg-opacity-50 py-2 px-4 rounded hover:bg-opacity-70 transition duration-300">
              <SettingsIcon className="w-5 h-5" />
              <span>설정</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-500 bg-opacity-50 py-2 px-4 rounded hover:bg-opacity-70 transition duration-300">
              <LogOutIcon className="w-5 h-5" />
              <span>나가기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestChat;