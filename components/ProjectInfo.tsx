import { Database } from "@/types/supabase";

export function ProjectInfo(props: Database["public"]["Tables"]["project"]["Row"]) {
    return (
      <div className="flex flex-col items-center mt-12 h-full max-w-none prose prose-sm dark:prose-invert">
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100">
          <img
            className="w-16 h-16 rounded-full"
            src={props.logo!}
            alt={props.name}
          />
        </div>
        <h1 className="my-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          {props.name}
        </h1>
        <div>{props.description}</div>
        <ul>
          <li>
            website:{" "}
            <a
              target="_blank"
              href={props.website!}
              rel="noopener noreferrer nofollow"
            >
              {props.website}
            </a>
          </li>
          <li>
            repo:{" "}
            <a
              target="_blank"
              href={`https://github.com/${props.repo}`}
              rel="noopener noreferrer nofollow"
            >
              {props.repo}
            </a>
          </li>
          <li>
            sync:{" "}
            <a
              target="_blank"
              href={`https://github.com/${props.repo}/tree/${props.hash}`}
              rel="noopener noreferrer nofollow"
            >
              {props.hash?.substring(0, 7)}
            </a>
          </li>
        </ul>
      </div>
    );
  }
  