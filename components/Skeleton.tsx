import { User } from "./Icons";

export function Skeleton() {
  return (
    <div role="status" className="max-w-sm animate-pulse p-6">
      <div className="flex items-top mt-4 space-x-3">
        <div className="p-1 rounded h-10 w-10 text-gray-200 dark:text-gray-700">
          <User className="w-8 h-8" />
        </div>
        <div>
          <div className="w-32 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className="w-48 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className="w-64 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className="w-64 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div className="w-48 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
