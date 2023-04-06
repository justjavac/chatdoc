import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "./components/Header";
import { Project } from "./components/Project";
import "./css/globals.css";
import { supabase } from "./utils";

export const metadata: Metadata = {
  title: "ChatDoc",
  description: "Document Chat Tool Powered by ChatGPT",
  themeColor: "#f8fafc",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: projects, error } = await supabase.from("project").select();

  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        ></script>
      </head>
      <body className="flex flex-col h-screen dark:bg-gray-800 antialiased min-h-screen">
        <Header />
        <div className="flex flex-1">
          <aside className="w-80 dark:bg-gray-900 border-r dark:border-none">
            <ul role="list" className="flex flex-col text-sm overflow-y-auto">
              {(projects ?? []).map((x) => (
                <Project key={x.slug} {...x} />
              ))}
            </ul>
          </aside>
          <main className="w-full h-[calc(100vh-4rem)] dark:bg-[#111111]">
            {children}
          </main>
        </div>
        <Script>
          {`
            const themeToggle = document.getElementById('theme-toggle')
            themeToggle.addEventListener('click', () => {
              if (!document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
              } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f8fafc')
              }
            })
          `}
        </Script>
      </body>
    </html>
  );
}
