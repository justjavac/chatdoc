"use client";

import type { Database } from "@/types/supabase";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Project({
  name,
  slug,
  logo,
  description,
}: Database["public"]["Tables"]["project"]["Row"]) {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
    <li role="menuitem">
      <Link
        href={`/${slug}`}
        role="link"
        className={`group flex items-center w-full p-4 ${
          isActive ? "bg-gray-100 dark:bg-gray-800 group/active" : ""
        }`}
      >
        <div className="p-1 rounded h-10 w-10 bg-gray-100">
          <img
            className="h-8 w-8 rounded-full max-w-none"
            width="32"
            height="32"
            src={logo!}
            alt={name}
          />
        </div>
        <div className="ml-3 truncate">
          <strong
            className={`group-hover:text-slate-900 dark:group-hover:text-white ${
              isActive
                ? "text-slate-900 dark:text-white"
                : "text-slate-700 dark:text-slate-300"
            }`}
          >
            {name}
          </strong>
          <div
            className={`group-hover:text-slate-900 dark:group-hover:text-white truncate ${
              isActive
                ? "text-slate-700 dark:text-slate-300"
                : "text-slate-500 dark:text-slate-300"
            }`}
          >
            {description}
          </div>
        </div>
      </Link>
    </li>
  );
}
