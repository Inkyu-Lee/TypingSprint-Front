import {
  GamepadIcon,
  GithubIcon,
  MessageSquareIcon,
  TwitterIcon,
  UserIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const TestPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" to="#">
          <GamepadIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Typing Sprint for Dev</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            게임하기
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            게시판
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            로그인
          </Link>

          <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gray-100">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Typing Sprint for Dev
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  코딩 타자 속도 측정 게임입니다!
                  다른 사람들과 함께 겨뤄보세요.
                </p>
              </div>
              <div className="space-x-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  게임 시작하기
                </button>
                <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  튜토리얼 보기
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              주요 기능
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <GamepadIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">실시간 게임</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  실시간 경쟁 - 멀티플레이
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MessageSquareIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">커뮤니티</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  사용자와 소통이 가능한 커뮤니티
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <UserIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">개인 프로필</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  개인 프로필 지원
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Typing Sprint for Dev. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            이용약관
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            개인정보처리방침
          </Link>
        </nav>
        <div className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            <GithubIcon className="h-4 w-4" />
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            <TwitterIcon className="h-4 w-4" />
          </Link>
        </div>
      </footer>

      {/*게임 작업 후 사진 붙이기  */}
    </div>
  );
};

export default TestPage;
