import { Chat } from "../components/Chat";
import { notFound } from "next/navigation";
import { supabase } from "../utils";

export async function generateStaticParams() {
  const { data: projects } = await supabase.from("project").select("slug");

  if (projects == null) {
    return [];
  }

  return projects.map(({ slug }) => ({ slug }));
}

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const { data, error } = await supabase
    .from("project")
    .select('*')
    .eq("slug", slug)
    .single();

  if (data == null) {
    notFound();
  }

  return <Chat project={data} />;
}
