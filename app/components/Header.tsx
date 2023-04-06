import { GitHub, Dark, Light } from "./Icons";

export function Header() {
  return (
    <header className="flex flex-col h-16 border-b dark:border-gray-600/10 dark:bg-gray-800">
      <nav className="flex items-center justify-between w-full px-3 py-3 mx-auto lg:px-4">
        <div className="flex items-center">
          <a href="/" className="flex">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ChatDoc
            </span>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/justjavac/chatdoc"
            data-tooltip-target="tooltip-github-2"
            className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <GitHub />
            <span className="sr-only">View on Github</span>
          </a>
          <button
            type="button"
            id="theme-toggle"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <Dark className="w-5 h-5 hidden dark:flex" />
            <Light className="w-5 h-5 dark:hidden flex" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
