import { Chat } from "../components/Chat";
import { notFound } from "next/navigation";
import { supabase } from "../utils";

export async function generateStaticParams() {
  const { data: projects = [] } = await supabase.from("project").select("slug");

  return (
    projects?.map(({ slug }) => ({
      slug,
    })) ?? []
  );
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data, error } = await supabase
    .from("page")
    .select(
      `
      project!inner (
        id
      )
    `
    )
    .eq("project.slug", slug);

  if (!data || data.length === 0) {
    notFound();
  }

  return <Chat />;
}
